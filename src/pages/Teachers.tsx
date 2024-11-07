import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { teachers } from "../fakedata";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    const rows = data.map((student) => [
      `${student.name} ${student.surname}`,
      student.email,
      student.phone,
      student.address,
      student.admissionDate,
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "students.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="overflow-x-auto">
      <button
        onClick={exportToCSV}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Excel olaraq yüklə
      </button>

      <table
        aria-label="List of students"
        className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Ad
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Telefon
            </th>
            <th scope="col" className="px-6 py-3">
              Ünvan
            </th>
            <th scope="col" className="px-6 py-3">
              Qəbul Tarixi
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {datapaginate.map((student) => (
            <tr
              key={student.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className={cellClass}>
                {student.name} {student.surname}
              </td>
              <td className={cellClass}>{student.email}</td>
              <td className={cellClass}>{student.phone}</td>
              <td className={cellClass}>{student.address}</td>
              <td className={cellClass}>{student.admissionDate}</td>
              <td className={cellClass}>
                <Link
                  to={`/admin/teacher/${student.id}`}
                  className="text-blue-500"
                >
                  Daha ətraflı
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
