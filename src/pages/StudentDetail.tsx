import React, { useState } from "react";
import { accoundData } from "../fakedata";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
function StudentDetail() {
  const student = accoundData;
  const [editActive, setEditActive] = useState(false);
  const initialValues = {
    name: student.name || "",
    surname: student.surname || "",
    email: student.email || "",
    phone: student.phone || "",
    address: student.address || "",
    university: student.university || "",
    faculty: student.faculty || "",
    point: student.point || "",
    admissionDate: student.joinDate || "",
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

  const fieldInput = [
    { id: "name", label: "Ad", placeholder: "Ad" },
    { id: "surname", label: "Soyad", placeholder: "Soyad" },
    { id: "email", label: "Email", placeholder: "Email" },
    { id: "university", label: "Universitet", placeholder: "Universitet" },
    { id: "faculty", label: "Fakültə", placeholder: "Fakültə" },
    { id: "point", label: "Nəticə", placeholder: "Nəticə" },
    { id: "joinDate", label: "Qoşulma Tarixi", placeholder: "Qoşulma Tarixi" },
    { id: "phone", label: "Telefon", placeholder: "Telefon" },
    { id: "address", label: "Ünvan", placeholder: "Ünvan" },
  ];

  const handleSubmit = (values:any) => {
    console.log(values);
  };

  const deleteStudent = () => {
    if (confirm("Tələbəni silmək istədiyinizdən əminsiniz?")) {
      console.log("Student deleted");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex items-center space-x-6 justify-between">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300">
          <div className="flex items-center justify-center w-full h-full text-3xl text-gray-500">
            <span>
              {student.name.charAt(0)}
              {student.surname.charAt(0)}
            </span>
          </div>
        </div>
        <button
          onClick={deleteStudent}
          className="px-3 py-2 bg-red-400 text-white rounded-lg"
        >
          Sil
        </button>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between flex-wrap gap-5">
              {fieldInput.map(({ id, label, placeholder }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className={`text-sm font-medium mb-2 flex items-center ${
                      editActive ? "text-primary" : "text-gray-500"
                    }`}
                  >
                    {label}
                  </label>
                  <Field
                    type="text"
                    id={id}
                    name={id}
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${
                      editActive ? "border-border" : "border-gray-500"
                    }`}
                    disabled={!editActive}
                    placeholder={placeholder}
                  />
                  <ErrorMessage
                    name={id}
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </Form>
      </Formik>
      <div className="mt-6 flex justify-end">
        {!editActive && (
          <button
            onClick={() => setEditActive((prev) => !prev)}
            className="px-4 py-2 bg-primary text-white rounded-md bg-slate-500"
          >
            Redaktə Et
          </button>
        )}
        {editActive && (
          <button
            onClick={() => setEditActive((prev) => !prev)}
            className="px-4 py-2 bg-primary text-white rounded-md bg-slate-500"
          >
            Yadda Saxla
          </button>
        )}
      </div>
    </div>
  );
}

export default StudentDetail;
