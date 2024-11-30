import Clients from "../components/supervisor/Clients";

function Supervisor() {
  return (
    <div>
      <nav className="px-8 py-5 flex justify-between items-center">
        <div className="logo">Edu ...</div>
        <div className="profile  flex items-center justify-center">
          <span className="">SuperVisor : Ali Məmmədov</span>
        </div>
      </nav>
      <div className="px-5 ">
        <div className="flex py-10 justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Müştərilər
          </h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Müştəri əlavə et
          </button>
        </div>
        <Clients />
      </div>
    </div>
  );
}

export default Supervisor;
