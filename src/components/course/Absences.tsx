import { useState } from "react";
import { absences } from "../../fakedata";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Navigate, useParams } from "react-router";

function Absences() {
  const { role } = useParams();

  if (role !== "student") {
    return <Navigate to={`/${role}`} />;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentabsences = absences.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(absences.length / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="bg-white rounded-lg p-4 overflow-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-lg">
          <tr className="rounded-lg">
            <th scope="col" className="px-6 py-3">
              Tarix
            </th>
          </tr>
        </thead>
        <tbody>
          {currentabsences.map((absence) => (
            <tr
              key={absence.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {absence.date}
              </td>
              <td className="">
                <div className="bg-blue-500 py-2 px-3 text-white w-12 text-center rounded-lg">
                  {absence.absence ? "i/e" : "q/b"}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end items-center mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
        >
          <FaAngleLeft />
        </button>
        <span className="text-gray-700 mx-2">
          {" "}
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default Absences;
