import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { coursesStudents } from "../../fakedata";
import { MdClose } from "react-icons/md";

interface Absence {
  studentId: number;
  date: string;
  isPresent: boolean;
}

function AbsencesModal({
  allDates,
  setShowModal,
  showModal,
}: {
  allDates: string[];
  setShowModal: (show: boolean) => void;
  showModal: boolean;
}) {
  const [absences, setAbsences] = useState<Absence[]>([]);
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState("");
  const today = new Date();

  const selectableDates = allDates.filter((date) => {
    const absenceForDate = coursesStudents.every((student) =>
      student.absences.some((a) => a.date === date && a.absence === null)
    );
    const dateObj = new Date(date);
    return absenceForDate && dateObj <= today;
  });

  useEffect(() => {
    setAbsences(
      coursesStudents.map((student) => ({
        studentId: student.id,
        date: selectedDate,
        isPresent: true,
      }))
    );
  }, [selectedDate]);
  const toggleAbsence = (studentId: number) => {
    setAbsences((prev) =>
      prev.map((absence) =>
        absence.studentId === studentId
          ? { ...absence, isPresent: !absence.isPresent }
          : absence
      )
    );
  };

  const handleSubmit = () => {
    console.log({ qroupId: id, students: [...absences] });
    alert("Qayıblar təsdiqləndi!");
    setShowModal(false);
  };

  return (
    <div>
      <div className="absolute bg-gray-100 lg:w-[500px] lg:h-[500px] overflow-auto p-3 lg:left-[40%] lg:top-[20%] inset-0 border rounded-lg shadow-2xl">
        <h1 className="text-center text-lg font-semibold p-2">
          Qayıb əlavə et
        </h1>
        <button
          className="absolute right-2 top-2"
          onClick={() => setShowModal(false)}
        >
          <MdClose size={24} />
        </button>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-lg">
            <tr className="rounded-lg">
              <th scope="col" className="px-6 py-3">
                Tələbə
              </th>
              <th scope="col" className="px-6 py-3">
                <select
                  className="border px-3 py-2 rounded-lg w-full"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  value={selectedDate}
                >
                  <option value="" disabled>
                    Tarix seçin
                  </option>
                  {selectableDates.map((date) => (
                    <option key={date} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {coursesStudents.map((student) => {
              const absence = absences.find((s) => s.studentId === student.id);
              return (
                <tr
                  key={student.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {student.name} {student.surname}
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button
                      onClick={() => toggleAbsence(student.id)}
                      className={`px-3 py-2 transition-colors duration-300 ${
                        absence && absence.isPresent
                          ? "bg-green-400 text-white"
                          : "bg-transparent text-gray-900"
                      } border rounded`}
                    >
                      i/e
                    </button>
                    <button
                      onClick={() => toggleAbsence(student.id)}
                      className={`px-3 py-2 transition-colors duration-300 ${
                        absence && !absence.isPresent
                          ? "bg-red-400 text-white"
                          : "bg-transparent text-gray-900"
                      } border rounded`}
                    >
                      q/b
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={2} className="text-center">
                <button
                  className="px-3 py-2 bg-[#3e80f9] text-white rounded-md my-3"
                  onClick={handleSubmit}
                >
                  Təstiq et!
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AbsencesModal;
