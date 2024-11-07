import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { teachers } from "../fakedata";

function TeacherDetail() {
  const teacher = teachers[0];
  const [editActive, setEditActive] = useState(false);

  const initialValues = {
    name: teacher.name || "",
    surname: teacher.surname || "",
    email: teacher.email || "",
    phone: teacher.phone || "",
    address: teacher.address || "",
    filialID: teacher.filialID || "",
    joinDate: teacher.joinDate || "",
    image: teacher.image || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Ad boş ola bilməz"),
    surname: Yup.string().required("Soyad boş ola bilməz"),
    email: Yup.string()
      .email("Email düzgün deyil")
      .required("Email boş ola bilməz"),
    filialID: Yup.number().required("Filial ID boş ola bilməz"),
  });

  const fieldInput = [
    { id: "name", label: "Ad", placeholder: "Ad" },
    { id: "surname", label: "Soyad", placeholder: "Soyad" },
    { id: "email", label: "Email", placeholder: "Email" },
    { id: "phone", label: "Telefon", placeholder: "Telefon" },
    { id: "address", label: "Ünvan", placeholder: "Ünvan" },
    { id: "filialID", label: "Filial ID", placeholder: "Filial ID" },
    { id: "joinDate", label: "Qoşulma Tarixi", placeholder: "Qoşulma Tarixi" },
  ];

  const handleSubmit = (values) => {
    console.log("Updated data:", values);
  };

  const deleteTeacher = () => {
    if (window.confirm("Müəllimi silmək istədiyinizdən əminsiniz?")) {
      console.log("Teacher deleted");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex items-center space-x-6 justify-between">
        {teacher.image ? (
          <img src={teacher.image} alt="Profile" className="w-24 h-24 rounded-full" />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl text-gray-500">
            <span>
              {teacher.name.charAt(0)}
              {teacher.surname.charAt(0)}
            </span>
          </div>
        )}
        <button
          onClick={deleteTeacher}
          className="px-3 py-2 bg-red-500 text-white rounded-lg"
        >
          Sil
        </button>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
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
            {editActive && (
              <button
                type="submit"
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Yadda Saxla
              </button>
            )}
          </Form>
        )}
      </Formik>
      
      <div className="mt-6 flex justify-end">
        {!editActive ? (
          <button
            onClick={() => setEditActive(true)}
            className="px-4 py-2 bg-slate-500 text-white rounded-md"
          >
            Redaktə Et
          </button>
        ) : (
          <button
            onClick={() => setEditActive(false)}
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            İmtina Et
          </button>
        )}
      </div>
    </div>
  );
}

export default TeacherDetail;
