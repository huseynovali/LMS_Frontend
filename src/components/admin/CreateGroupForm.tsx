import { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "",
  startTime: "",
  startDate: "",
  endDate: "",
  days: "",
};

const CreateGroupSchema = yup.object().shape({
  name: yup.string().required("Ad daxil edin"),
  time: yup
    .string()
    .required("Vaxt daxil edin")
    .matches(
      /^([01]\d|2[0-3]):[0-5]\d-([01]\d|2[0-3]):[0-5]\d$/,
      "Vaxt düzgün formatda olmalıdır (məsələn, 14:00-15:00)"
    ),
  startDate: yup.date().required("Başlama tarixini daxil edin"),
  endDate: yup
    .date()
    .required("Bitmə tarixini daxil edin")
    .min(
      yup.ref("startDate"),
      "Bitmə tarixi başlama tarixindən sonra olmalıdır"
    )
    .test(
      "max-date-difference",
      "Bitmə tarixi başlama tarixindən maksimum 1 il sonra olmalıdır",
      function (value) {
        const { startDate } = this.parent; 
        if (!value || !startDate) return true; 
        const diffInYears = (new Date(value).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24 * 365);
        return diffInYears <= 1; 
      }
    ),
  days: yup
    .string()
    .required("Gün daxil edin")
    .min(1, "Gün daxil edin")
    .max(7, "Gün daxil edin"),
});

function CreateGroupForm() {
  const [showCustomDays, setShowCustomDays] = useState(false);
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={CreateGroupSchema}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="p-5">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Qrup:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Qrupun Adı:"
                  className="mt-1 p-2 border rounded w-full"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="time" className="block text-sm font-medium">
                  Vaxt:
                </label>
                <Field
                  type="text"
                  id="time"
                  name="time"
                  placeholder="12:00-14:30 , 14:00-15:30  ..."
                  className="mt-1 p-2 border rounded w-full"
                />
                <ErrorMessage
                  name="time"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium"
                >
                  Başlama tarixi:
                </label>
                <Field
                  type="date"
                  id="startDate"
                  name="startDate"
                  placeholder="Başlama tarixi"
                  className="mt-1 p-2 border rounded w-full"
                />
                <ErrorMessage
                  name="startDate"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="endDate" className="block text-sm font-medium">
                  Bitmə tarixi:
                </label>
                <Field
                  type="date"
                  id="endDate"
                  name="endDate"
                  placeholder="Bitmə tarixi"
                  className="mt-1 p-2 border rounded w-full"
                />
                <ErrorMessage
                  name="endDate"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="days" className="block text-sm font-medium">
                  Günlər:
                </label>
                <Field
                  as="select"
                  id="days"
                  name="days"
                  className="mt-1 p-2 border rounded w-full"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFieldValue("days", e.target.value);
                    setShowCustomDays(e.target.value === "custom");
                  }}
                >
                  <option value="">Gün seçin</option>
                  <option value="2-4-6">2-4-6</option>
                  <option value="1-3-5">1-3-5</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="custom">Başqa gün</option>
                </Field>
                <ErrorMessage
                  name="days"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {showCustomDays && (
                <div className="mb-4">
                  <label htmlFor="days" className="block text-sm font-medium">
                    Xüsusi günlər:
                  </label>
                  <Field
                    type="text"
                    id="days"
                    name="days"
                    placeholder="Xüsusi günləri daxil edin"
                    className="mt-1 p-2 border rounded w-full"
                  />
                  <ErrorMessage
                    name="days"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#3E80F9] text-white px-4 py-2 rounded"
                >
                  Yarat
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateGroupForm;
