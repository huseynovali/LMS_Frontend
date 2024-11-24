import MainContainer from "../components/CustomComponent/MainContainer";

function FilialAdmins() {
  return (
    <MainContainer>
      <div className="w-full flex justify-end">
      <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Admin əlavə et
      </button>
      </div>
      <ul>
        <li className="border  rounded-lg px-3 py-2 border-gray-200 my-1">
          <span className="text-lg font-semibold">Admin 1</span>
        </li>
        <li className="border  rounded-lg px-3 py-2 border-gray-200 my-1">
          <span className="text-lg font-semibold">Admin 2</span>
        </li>
        <li className="border  rounded-lg px-3 py-2 border-gray-200 my-1">
          <span className="text-lg font-semibold">Admin 3</span>
        </li>
      </ul>
    </MainContainer>
  );
}

export default FilialAdmins;
