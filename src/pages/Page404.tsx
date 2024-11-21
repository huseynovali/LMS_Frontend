
import backgroundImage from "../assets/unblured.jpeg";
function Page404() {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold ">Səyifə Tapılmadı!</h1>
      <p className=" mt-2">Üzr istəyirik, baxdığınız səhifə tapılmadı.</p>
      <p className="text-white mt-4">
        <button
          onClick={handleGoBack}
          className="text-blue-400 hover:underline"
        >
          Geri qayıt
        </button>
      </p>
      <img src={backgroundImage} alt="404" className="object-cover w-[60%] mt-5" />
    </div>
  );
}

export default Page404;
