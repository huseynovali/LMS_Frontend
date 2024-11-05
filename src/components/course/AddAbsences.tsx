import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { coursesStudents } from "../../fakedata";
import { useParams } from "react-router";
interface Absence {
  studentId: number;
  date: string;
  isPresent: boolean;
}
function AddAbsences({ allDates }: { allDates: string[] }) {
  const [showModal, setShowModal] = useState(false);
  const [absences, setAbsences] = useState<Absence[]>([]);
  const {id} = useParams()
  const today = new Date().toLocaleDateString("az-EN");
  const checkDate = allDates.includes(today);
  useEffect(() => {
    setAbsences(
      coursesStudents.map((student) => ({
        studentId: student.id,
        date: today,
        isPresent: true,
      }))
    );
  }, [today]);

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
    console.log({qroupId:id,students:[...absences]});
    alert("Qayıblar təsdiqləndi!");
    setShowModal(false);
  };

  return (
    <div>
      {!checkDate && (
        <button
          className="bg-[#3e80f9] text-white px-2 py-2 rounded-md text-sm"
          onClick={() => setShowModal(true)}
        >
          Qayıb əlavə et
        </button>
      )}

      {showModal && (
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
                  {today}
                </th>
              </tr>
            </thead>
            <tbody>
              {coursesStudents.map((student) => {
                const absence = absences.find(
                  (s) => s.studentId === student.id
                );
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
                            ? "bg-green-500 text-white"
                            : "bg-transparent text-gray-900"
                        } border rounded`}
                      >
                        i/e
                      </button>
                      <button
                        onClick={() => toggleAbsence(student.id)}
                        className={`px-3 py-2 transition-colors duration-300 ${
                          absence && !absence.isPresent
                            ? "bg-red-500 text-white"
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
      )}
    </div>
  );
}

export default AddAbsences;
