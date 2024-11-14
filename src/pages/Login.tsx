import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup"; // Yup for validation
import AuthImage from "../assets/auth-img1.png";

function Login() {
  const initialValues = {
    username: "",
    password: "",
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required("İstifadəçi adı tələb olunur"),
    password: Yup.string().required("Şifrə tələb olunur"),
  });

  return (
    <div className="grid grid-cols-9">
      <div className="left bg-[#ECF2FE] hidden md:flex col-span-5 justify-center items-center h-screen">
        <img src={AuthImage} alt="Auth" />
      </div>
      <div className="right col-span-9 md:col-span-3 flex justify-center items-center">
        <div className="w-[80%]">
          <h1 className="text-4xl font-semibold mt-10">Welcome Back! 👋</h1>
          <p className="text-gray-500 mt-3 mb-8">
            Please sign in to your account and start the adventure
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <div className="mb-4">
                <label htmlFor="username" className="text-sm font-bold mb-1">İstifadəçi adı</label>
                <Field
                  type="text"
                  name="username"
                  className="w-full py-3 rounded-lg px-2 outline-none border border-[#D5DBE7]"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              
              <div className="mb-4">
                <label htmlFor="password" className="text-sm font-bold mb-1">Şifrə</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full py-3 px-2 rounded-lg outline-none border border-[#D5DBE7]"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              
              <div>
                <button type="submit" className="w-full bg-[#2563EB] text-white py-3 rounded-lg mt-5">Daxil ol!</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
