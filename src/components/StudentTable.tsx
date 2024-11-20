import React from "react";
import { Link } from "react-router-dom";
import { student } from "../types/types";

function StudentTable({
  datapaginate,
  cellClass,
}: {
  datapaginate: any;
  cellClass: string;
}) {
  return (
    <div>
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
          {datapaginate.map((student: student) => (
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
                  to={`/admin/student/${student.id}`}
                  className="text-blue-500"
                >
                  Daha ətraflı
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
