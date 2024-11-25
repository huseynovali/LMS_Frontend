import { accoundData } from "../fakedata";
import ChangePasswordForm from "../components/ChangePasswordForm";
import EditForm from "../components/admin/EditForm";

function StudentDetail() {
  const student = accoundData;

  const deleteStudent = () => {
    if (confirm("Tələbəni silmək istədiyinizdən əminsiniz?")) {
      console.log("Student deleted");
    }
  };
  const fieldInput = [
    { id: "name", label: "Ad" },
    { id: "surname", label: "Soyad" },
    { id: "email", label: "Email" },
    { id: "university", label: "Universitet" },
    { id: "faculty", label: "Fakültə" },
    { id: "point", label: "Nəticə" },
    { id: "joinDate", label: "Qoşulma Tarixi" },
    { id: "phone", label: "Telefon" },
    { id: "address", label: "Ünvan" },
  ];
  return (
    <div>
      <div className=" mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex items-center space-x-6 justify-between">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300">
            <div className="flex items-center justify-center w-full h-full text-3xl text-gray-500">
              <span>
                {student.name.charAt(0)}
                {student.surname.charAt(0)}
              </span>
            </div>
          </div>
          <div>
            <button
              onClick={deleteStudent}
              className="px-3 py-2 bg-red-400 text-white rounded-lg"
            >
              Sil
            </button>

            <button className="px-3 py-2 bg-gray-400 text-white rounded-lg ml-3">
              Blok et !
            </button>
          </div>
        </div>
        <EditForm data={student} fieldInput={fieldInput} role="student" />
      </div>
      <ChangePasswordForm role="student" id={student.id} />
    </div>
  );
}

export default StudentDetail;
