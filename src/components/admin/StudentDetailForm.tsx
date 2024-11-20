import { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { accoundData } from "../../fakedata";
import { fieldInput } from "../../constant/studentFieldInput";

function StudentDetailForm() {
  const [editActive, setEditActive] = useState(false);
  const toggleEdit = () => setEditActive((prev) => !prev);
  const student = accoundData;
  const initialValues = {
    name: student.name || "",
    surname: student.surname || "",
    email: student.email || "",
    phone: student.phone || "",
    address: student.address || "",
    university: student.university || "",
    faculty: student.faculty || "",
    point: student.point || "",
    joinDate: student.joinDate || "",
    image: student.image || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Ad boş ola bilməz"),
    surname: Yup.string().required("Soyad boş ola bilməz"),
    email: Yup.string()
      .email("Email düzgün deyil")
      .required("Email boş ola bilməz"),
    university: Yup.string().required("Universitet boş ola bilməz"),
    faculty: Yup.string().required("Fakültə boş ola bilməz"),
    point: Yup.number().required("Nəticə boş ola bilməz"),
  });

  const handleSubmit = (values: any) => {
    alert("Updated data:", values);
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

export default StudentDetailForm;
