import AuthImage from "../assets/EnterOTP-amico.png";
import SendEmail from "../components/Login/SendEmail";
import OtpConfirm from "../components/Login/OtpConfirm";
import { Navigate, useParams } from "react-router";

function LoginAdmin() {
  const { role } = useParams();

  if (role !== "admin" && role !== "teacher") {
    return <Navigate to="/login" />;
  }
  return (
    <div className="grid grid-cols-9">
      <div className="left bg-[#ECF2FE] hidden md:flex col-span-5 justify-center items-center h-screen">
        <img src={AuthImage} alt="Auth" className="h-full" />
      </div>
      <div className="right col-span-9 md:col-span-3 flex justify-center items-center">
        <div className="w-[80%]">
          <h1 className="text-4xl font-semibold mb-10">Welcome Back! 👋</h1>

          <SendEmail />
          <OtpConfirm />
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
