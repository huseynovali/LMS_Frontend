import { accoundData } from "../fakedata";
import ChangePasswordForm from "../components/ChangePasswordForm";
import StudentDetailForm from "../components/admin/StudentDetailForm";

function StudentDetail() {
  const student = accoundData;

  const deleteStudent = () => {
    if (confirm("Tələbəni silmək istədiyinizdən əminsiniz?")) {
      console.log("Student deleted");
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex items-center space-x-6 justify-between">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300">
            <div className="flex items-center justify-center w-full h-full text-3xl text-gray-500">
              <span>
                {student.name.charAt(0)}
                {student.surname.charAt(0)}
              </span>
            </div>
          </div>
          <button
            onClick={deleteStudent}
            className="px-3 py-2 bg-red-400 text-white rounded-lg"
          >
            Sil
          </button>
        </div>
        <StudentDetailForm />
      </div>
      <ChangePasswordForm role="student" id={student.id} />
    </div>
  );
}

export default StudentDetail;
