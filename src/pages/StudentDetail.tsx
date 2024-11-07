import { useState } from "react";
import { accoundData } from "../fakedata";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import ChangePasswordForm from "../components/ChangePasswordForm";

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

  const deleteStudent = () => {
    if (confirm("Tələbəni silmək istədiyinizdən əminsiniz?")) {
      console.log("Student deleted");
    }
  };

  const toggleEdit = () => setEditActive((prev) => !prev);

  const fieldInput = [
    { id: "name", label: "Ad" },
    { id: "surname", label: "Soyad" },
    { id: "email", label: "Email" },
    { id: "university", label: "Universitet" },
    { id: "faculty", label: "Fakültə" },
    { id: "point", label: "Nəticə" },
    { id: "joinDate", label: "Qoşulma Tarixi" },
    { id: "phone", label: "Telefon" },
    { id: "address", label: "Ünvan" },
  ];

  return (
    <div>
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
            <div className="my-5 grid grid-cols-6 gap-4">
              {fieldInput.map(({ id, label }) => (
                <div
                  key={id}
                  className="col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2"
                >
                  <label
                    htmlFor={id}
                    className={`text-sm font-medium ${
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
      <ChangePasswordForm role="student" id={student.id} />
    </div>
  );
}

export default StudentDetail;
