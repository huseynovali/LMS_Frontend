import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

function ChangePasswordForm({ role, id }: { role: string; id: number }) {
  const validationSchema = Yup.object({
    newPassword: Yup.string().required("Yeni parol boş ola bilməz"),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), undefined], "Parollar eyni deyil")
      .required("Təsdiq parol boş ola bilməz"),
  });

  const handleSubmit = (values: any) => {
    console.log(values, role, id);
  };

  return (
    <div className="max-w-4xl mt-5 mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h2 className="text-lg font-semibold">Parolu Dəyiş</h2>
      <Formik
        initialValues={{ newPassword: "", confirmNewPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-6 gap-4">
              {["newPassword", "confirmNewPassword"].map((field) => (
                <div
                  key={field}
                  className="col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2"
                >
                  <label
                    htmlFor={field}
                    className="text-sm font-medium mb-2 flex items-center text-[#3E80F9] "
                  >
                    {field === "newPassword" ? "Yeni Parol" : "Təsdiq Parol"}
                  </label>
                  <Field
                    type="password"
                    id={field}
                    name={field}
                    className="appearance-none block w-full px-3 py-2 border border-[#3E80F9] rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm border-gray-500"
                    placeholder={
                      field === "newPassword" ? "Yeni Parol" : "Təsdiq Parol"
                    }
                  />
                  <ErrorMessage
                    name={field}
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-md bg-[#3E80F9]"
              >
                Parolu Yenilə
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ChangePasswordForm;
