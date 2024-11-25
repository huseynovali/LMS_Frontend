import { Link } from "react-router-dom";
import MainContainer from "../components/CustomComponent/MainContainer";
import { filialAdmins } from "../fakedata";

function FilialAdmins() {
  const data = filialAdmins;
  return (
    <MainContainer>
      <div className="w-full flex justify-end">
        <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Admin əlavə et
        </button>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link
              to={`/admin/filialadmin/${item.id}`}
              className="border  rounded-lg px-3 py-2 border-gray-200 my-1 block"
            >
              <span className="text-lg font-semibold">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
}

export default FilialAdmins;
