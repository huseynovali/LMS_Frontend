import { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

function EditForm({ data, fieldInput, role }: any) {
  const [editActive, setEditActive] = useState(false);
  const toggleEdit = () => setEditActive((prev) => !prev);

  const initialValues = {
    name: data.name || "",
    surname: data.surname || "",
    email: data.email || "",
    phone: data.phone || "",
    address: data.address || "",
    ...(role === "student" && {
      university: data.university || "",
      faculty: data.faculty || "",
      point: data.point || "",
    }),
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Ad boş ola bilməz"),
    surname: Yup.string().required("Soyad boş ola bilməz"),
    email: Yup.string()
      .email("Email düzgün deyil")
      .required("Email boş ola bilməz"),
    phone: Yup.string().required("Telefon boş ola bilməz"),
    address: Yup.string().required("Ünvan boş ola bilməz"),
    ...(role === "student" && {
      university: Yup.string().required("Universitet boş ola bilməz"),
      faculty: Yup.string().required("Fakültə boş ola bilməz"),
      point: Yup.number()
        .min(0, "Nəticə 0-dan kiçik ola bilməz")
        .max(700, "Nəticə 700-dən böyük ola bilməz")
        .required("Nəticə boş ola bilməz"),
    }),
  });

  const handleSubmit = (values: any) => {
    console.log("Updated data:", values);
    console.log("Role:", role);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="my-5 grid grid-cols-6 gap-4">
            {fieldInput.map(({ id, label }) => (
              <div
                key={id}
                className="col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2"
              >
                <label
                  htmlFor={id}
                  className={`text-sm font-medium ${
                    editActive ? "text-[#3E80F9] " : "text-gray-500"
                  }`}
                >
                  {label}
                </label>
                <Field
                  type="text"
                  id={id}
                  name={id}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                    editActive ? "border-[#3E80F9]" : "border-gray-500"
                  }`}
                  disabled={!editActive}
                />
                <ErrorMessage
                  name={id}
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            {!editActive && (
              <button
                onClick={toggleEdit}
                className="px-4 py-2 bg-primary text-white rounded-md bg-[#3E80F9] "
              >
                Məlumatları Yenilə
              </button>
            )}
            {editActive && (
              <div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-md bg-[#3E80F9] mx-2"
                >
                  Yadda Saxla
                </button>
                <button
                  onClick={toggleEdit}
                  className="px-4 py-2 border border-[#3E80F9] text-[#3E80F9] rounded-md"
                >
                  İmtina Et
                </button>
              </div>
            )}
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default EditForm;
