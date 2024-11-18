import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaCheck } from "react-icons/fa";
import * as Yup from "yup";
function SendEmail() {
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Düzgün email daxil edin")
      .required("Email tələb olunur"),
  });
  const sendEmail = false;
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor="email" className="text-sm font-bold mb-1">
            Email
          </label>
          <div className="mb-4 flex">
            <Field
              type="email"
              name="email"
              className={`${
                sendEmail ? "border-green-500" : "border-[#D5DBE7]"
              } w-full py-3 rounded-lg px-2 outline-none border  `}
              disabled={sendEmail}
            />

            <div>
              {sendEmail ? (
                <button
                  disabled
                  className="w-full bg-green-500 text-white py-3 px-2 ml-1 rounded-lg h-full text-center"
                >
                  <FaCheck />
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-[#3E80F9] text-white py-3 px-2 ml-1 rounded-lg h-full"
                  disabled
                >
                  Göndər
                </button>
              )}
            </div>
          </div>
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </Form>
      </Formik>
    </div>
  );
}

export default SendEmail;
