import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";

function CreateStudent() {
  const [open, setOpen] = useState(false);
  const [savedValues, setSavedValues] = useState(null);

  const initialValues = {
    name: "",
    surname: "",
    fatherName: "",
    email: "",
    phone: "",
    address: "",
    joinDate: "",
    point: "",
    university: "",
    faculty: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Ad mütləqdir!"),
    surname: Yup.string().required("Soyad mütləqdir!"),
    fatherName: Yup.string().required("Ata adı mütləqdir!"),
    email: Yup.string()
      .email("Etibarlı bir e-poçt daxil edin!")
      .required("E-poçt mütləqdir!"),
    phone: Yup.string()
      .matches(/^\+?\d{10,}$/, "Telefon nömrəsi etibarlı deyil!")
      .required("Telefon nömrəsi mütləqdir!"),
    address: Yup.string().required("Ünvan mütləqdir!"),
    joinDate: Yup.date().required("Qoşulma tarixi mütləqdir!"),
    point: Yup.number()
      .typeError("Bal rəqəm olmalıdır!")
      .min(0, "Minimum 0 olmalıdır!")
      .max(100, "Maksimum 100 olmalıdır!")
      .required("Bal mütləqdir!"),
    university: Yup.string().required("Universitet mütləqdir!"),
    faculty: Yup.string().required("Fakültə mütləqdir!"),
  });

  useEffect(() => {
    const storedValues = localStorage.getItem("studentForm");
    if (storedValues) {
      setSavedValues(JSON.parse(storedValues));
    }
  }, [open]);

  const handleSave = (values) => {
    localStorage.setItem("studentForm", JSON.stringify(values));
    alert("Məlumatlar yadda saxlanıldı!");
  };

  const handleReset = (resetForm) => {
    localStorage.removeItem("studentForm");
    resetForm({ values: initialValues });
    setSavedValues(null);
    alert("Məlumatlar yeniləndi!");
  };

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Telebe Elave Et!
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <button
            tabIndex={0}
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setOpen(false)}
          ></button>

          <div className="relative w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
            <Formik
              initialValues={savedValues || initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log("Form Submitted", values);
                setOpen(false);
                resetForm({ values: initialValues });
                setSavedValues(null);
                resetForm();
              }}
            >
              {({ isSubmitting, resetForm, values }) => (
                <Form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "name", label: "Ad" },
                      { name: "surname", label: "Soyad" },
                      { name: "fatherName", label: "Ata Adı" },
                      { name: "email", label: "E-poçt" },
                      { name: "phone", label: "Telefon Nömrəsi" },
                      { name: "address", label: "Ünvan" },
                      {
                        name: "joinDate",
                        label: "Qoşulma Tarixi",
                        type: "date",
                      },
                      { name: "point", label: "Bal", type: "number" },
                      { name: "university", label: "Universitet" },
                      { name: "faculty", label: "Fakültə" },
                    ].map(({ name, label, type = "text" }) => (
                      <div key={name} className="flex flex-col">
                        <label
                          htmlFor={name}
                          className="block text-sm font-medium"
                        >
                          {label}
                        </label>
                        <Field
                          id={name}
                          name={name}
                          type={type}
                          className="w-full p-2 border rounded-lg"
                        />
                        <ErrorMessage
                          name={name}
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-between gap-4">
                    <div>
                      <button
                        type="button"
                        className=" bg-green-500 text-white py-2 px-3 rounded-lg hover:bg-green-600"
                        onClick={() => handleSave(values)}
                      >
                        Yadda Saxla
                      </button>
                      <button
                        type="button"
                        className=" bg-red-500 text-white py-2 px-3 ml-3 rounded-lg hover:bg-red-600"
                        onClick={() => handleReset(resetForm)}
                      >
                        Yenilə
                      </button>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-1/3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    >
                      Təsdiqle
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateStudent;