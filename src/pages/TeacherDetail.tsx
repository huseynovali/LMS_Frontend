import { teachers } from "../fakedata";
import ChangePasswordForm from "../components/ChangePasswordForm";
import TeacherDetailForm from "../components/admin/TeacherDetailForm";

function TeacherDetail() {
  const teacher = teachers[0];

  const deleteTeacher = () => {
    if (window.confirm("Müəllimi silmək istədiyinizdən əminsiniz?")) {
      console.log("Teacher deleted");
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex items-center space-x-6 justify-between">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl text-gray-500">
            <span>
              {teacher.name.charAt(0)}
              {teacher.surname.charAt(0)}
            </span>
          </div>

          <button
            onClick={deleteTeacher}
            className="px-3 py-2 bg-red-500 text-white rounded-lg"
          >
            Sil
          </button>
        </div>

        <div className="py-10">
          <div>
            <TeacherDetailForm />
          </div>
        </div>
      </div>

      <ChangePasswordForm role="teacher" id={teacher.id} />
    </div>
  );
}

export default TeacherDetail;
