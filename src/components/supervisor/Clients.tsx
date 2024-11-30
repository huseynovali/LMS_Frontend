import { Link } from "react-router-dom";
import { clients } from "../../fakedata";

function Clients() {
  const data = clients;
  return (
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
              <p className="text-sm text-gray-600 dark:text-gray-400"></p>
            </div>
          </div>
          <div>
            <Link
              to={`/supervisor/client/${client.id}`}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Məlumat
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Clients;
