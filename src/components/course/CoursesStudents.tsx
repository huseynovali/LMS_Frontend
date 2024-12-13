import { useState } from "react";
import { coursesStudents } from "../../fakedata";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import AddAbsences from "./AddAbsences";
import { useParams } from "react-router";
import AddStudent from "./AddStudent";
import RemoveStudent from "./RemoveStudent";
import { hasPermission } from "../../hooks/hasPermision";

function CoursesStudents() {
  const datesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const { role } = useParams<{ role: "admin" | "student" | "teacher" }>();
  const [checkedStudent, setCheckedStudent] = useState<number | null>(null);
  const allDates = Array.from(
    new Set(
      coursesStudents.flatMap((student) => student.absences.map((a) => a.date))
    )
  );
  const sortedStudents = coursesStudents
    ?.slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  const paginatedDates = allDates.slice(
    currentPage * datesPerPage,
    (currentPage + 1) * datesPerPage
  );

  const changeAbsence = (studentId: number, date: string, absence: boolean) => {
    if (confirm("Dəyişiklikləri təsdiqləyirsiniz?")) {
      console.log({ studentId, date, absence });
    }
  };

  const totalPages = Math.ceil(allDates.length / datesPerPage);

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold mb-4">
          Tələbələr{" "}
          <span className="ml-5 text-xl">{sortedStudents.length}</span>{" "}
        </h1>
        {role && hasPermission(role, "add:comments") && (
          <AddAbsences allDates={allDates} />
        )}
        {role &&
          hasPermission(role, "add:owncomments") &&
          checkedStudent == null && <AddStudent />}
        {role &&
          hasPermission(role, "add:owncomments") &&
          checkedStudent !== null && (
            <RemoveStudent checkedStudent={checkedStudent} />
          )}
      </div>
      <div className="bg-white rounded-lg overflow-auto mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-lg">
            <tr className="rounded-lg">
              <th scope="col" className="px-6 py-3">
                Ad
              </th>
              {paginatedDates.map((date) => (
                <th key={date} scope="col" className="px-6 py-3 text-center">
                  {date}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedStudents?.map((student) => (
              <tr
                key={student.name}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex relative">
                  {role && hasPermission(role, "update:comments") && (
                    <div className="w-10 h-5"></div>
                  )}
                  <div className="absolute">
                    {!checkedStudent &&
                      role &&
                      hasPermission(role, "update:comments") && (
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="mr-2 h-[20px] w-[20px] "
                          onChange={() => setCheckedStudent(student.id)}
                        />
                      )}
                    {checkedStudent === student.id && (
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="mr-2 h-[20px] w-[20px] "
                        onChange={() => setCheckedStudent(null)}
                        checked
                      />
                    )}
                  </div>
                  {student.name} {student.surname}
                </td>

                {paginatedDates.map((date) => {
                  const absence = student.absences.find((a) => a.date === date);
                  let absenceClass = "bg-gray-300";
                  let absenceText = "-";
                  if (absence?.absence === true) {
                    absenceClass = "bg-red-400";
                    absenceText = "i/e";
                  } else if (absence?.absence === false) {
                    absenceClass = "bg-green-400";
                    absenceText = "q/b";
                  }
                  return (
                    <td key={date} className="text-center">
                      {role && hasPermission(role, "absence:comments") && (
                        <button
                          onClick={() =>
                            changeAbsence(student.id, date, !absence?.absence)
                          }
                          disabled={hasPermission(role, "absenceadd:comments")}
                          title="Davamiyyəti dəyiş"
                          className={`${absenceClass} w-12 h-8 text-center py-1  text-white rounded-lg mx-auto`}
                        >
                          {absenceText}
                        </button>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-4 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
            aria-label="Önceki Sayfa"
          >
            <FaAngleLeft />
          </button>
          <span className="px-4 py-2 text-gray-700">
            {currentPage + 1} / {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
            }
            disabled={currentPage === totalPages - 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50"
            aria-label="Sonraki Sayfa"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoursesStudents;
