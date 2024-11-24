import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { teachers } from "../fakedata";
import { useState } from "react";
import UserTable from "../components/UserTable";
import CreateTeacher from "../components/admin/CreateTeacher";

function Teachers() {
  const data = teachers;
  const listElementCount = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / listElementCount);

  const datapaginate = data.slice(
    (currentPage - 1) * listElementCount,
    currentPage * listElementCount
  );

  const cellClass =
    "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white";

  const exportToCSV = () => {
    const headers = ["Ad", "Email", "Telefon", "Ünvan", "Qəbul Tarixi"];
    const rows = data.map((teacher) => [
      `${teacher.name} ${teacher.surname}`,
      teacher.email,
      teacher.phone,
      teacher.address,
      teacher?.joinDate,
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "teachers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center">
        <button
          onClick={exportToCSV}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Excel olaraq yüklə
        </button>
        <CreateTeacher />
      </div>
      <UserTable datapaginate={datapaginate} cellClass={cellClass} role="teacher" />

      <div className="flex items-center justify-center space-x-2 mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
          aria-label="Öncəki Sayfa"
        >
          <FaAngleLeft />
        </button>
        <span className="text-gray-700 mx-2">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
          aria-label="Sonraki Sayfa"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default Teachers;
