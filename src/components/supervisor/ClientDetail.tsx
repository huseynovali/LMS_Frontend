import { filials } from "../../fakedata";

function ClientDetail() {
  const data = filials;
  return (
    <div className="p-5">
      <div className="w-full flex justify-between ">
        <h1>
          <span className="lg:text-xl font-bold">Magistr Ol</span>
        </h1>
        <div>
          <button className="px-2 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 mx-2">
            Filial əlavə et
          </button>
          <button className="px-2 py-2 bg-blue-500 text-sm text-white rounded-lg hover:bg-blue-600">
            Superadmin əlavə et
          </button>
          <button className="px-2 py-2 bg-blue-500 text-sm mx-2 text-white rounded-lg hover:bg-blue-600">
            Redaktə et
          </button>
          <button className="px-2 py-2 bg-blue-500 text-sm text-white rounded-lg hover:bg-blue-600 ">
            Sil
          </button>
        </div>
      </div>
      <div>
        {data.map((client) => (
          <div
            key={client.id}
            className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center space-x-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {client.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {client.address}
                </p>
              </div>
            </div>
            <div>
              <div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Redaktə et
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mx-2">
                  Sil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientDetail;
