import { ErrorMessage, Field, Form, Formik } from "formik";

function OtpConfirm() {
  const initialValues = {
    otp: "",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor="email" className="text-sm font-bold mb-1">
            Otp
          </label>{" "}
          <div className="mb-4 flex">
            <Field
              type="text"
              name="otp"
              className="w-full py-3 rounded-lg px-2 outline-none border border-[#D5DBE7]"
            />
            <div>
              <button
                type="submit"
                className="w-full bg-[#3E80F9] text-white py-3 rounded-lg  h-full px-2 ml-1"
              >
                Təsdiq
              </button>
            </div>{" "}
          </div>{" "}
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

export default OtpConfirm;
