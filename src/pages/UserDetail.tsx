import { teachers } from "../fakedata";
import ChangePasswordForm from "../components/commonComponents/ChangePasswordForm";
import EditForm from "../components/admin/EditForm";
import { teacherFieldInput, studentFieldInput } from "../constant/fieldInputs";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fields } from "../types/types";

function UserDetail() {
  const { roleuser } = useParams();
  const [fieldInput, setFieldInput] = useState<fields[]>([]);
  console.log("hello");
  const teacher = teachers[0];
  useEffect(() => {
    if (roleuser == "student") {
      setFieldInput(studentFieldInput);
    } else {
      setFieldInput(teacherFieldInput);
    }
  }, []);
  const deleteUser = () => {
    if (confirm("Tələbəni silmək istədiyinizdən əminsiniz?")) {
      console.log("Student deleted");
    }
  };

  return (
    <div>
      <div className=" mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex items-center space-x-6 justify-between">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300">
            <div className="flex items-center justify-center w-full h-full text-3xl text-gray-500">
              <span>
                {teacher.name.charAt(0)}
                {teacher.surname.charAt(0)}
              </span>
            </div>
          </div>
          <div>
            <button
              onClick={deleteUser}
              className="px-3 py-2 bg-red-400 text-white rounded-lg"
            >
              Sil
            </button>
            <button className="px-3 py-2 bg-gray-400 text-white rounded-lg ml-3">
              Blok et !
            </button>
          </div>
        </div>
        <EditForm data={teacher} fieldInput={fieldInput} role="teacher" />
      </div>
      <ChangePasswordForm role="student" id={teacher.id} />
    </div>
  );
}

export default UserDetail;
