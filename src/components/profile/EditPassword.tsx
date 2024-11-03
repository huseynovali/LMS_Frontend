import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";

const initialValues = {
  newPassword: "",
  confirmPassword: "",
};

const passwordSchema = yup.object().shape({
  newPassword: yup.string().required("Şifrə daxil edin"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), undefined], "Şifrə uyğun gəlmir")
    .required("Şifrə daxil edin"),
});

function EditPassword() {
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="p-5 border-b border-[#dee2e6]">
        <h1 className="text-2xl font-semibold">Şifrəni Dəyiş</h1>
      </div>
      <div className="p-5">
        <Formik
          initialValues={initialValues}
          validationSchema={passwordSchema}
          onSubmit={(values, actions) => {
            
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium"
                >
                  Yeni Şifrə:
                </label>
                <Field
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  placeholder="New Password"
                  className="mt-1 p-2 border rounded w-full"
                />
                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium"
                >
                  Şifrənin Təkrarı:
                </label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="mt-1 p-2 border rounded w-full"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Dəyiş
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default EditPassword;
