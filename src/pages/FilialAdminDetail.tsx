import EditForm from "../components/admin/EditForm";
import { filialAdmins } from "../fakedata";
import ChangePasswordForm from "../components/ChangePasswordForm";

function FilialAdminDetail() {
  const admin = filialAdmins[0];
  const fieldInput = [
    { id: "name", label: "Ad" },
    { id: "surname", label: "Soyad" },
    { id: "email", label: "Email" },
    { id: "joinDate", label: "Qoşulma Tarixi" },
    { id: "phone", label: "Telefon" },
    { id: "address", label: "Ünvan" },
  ];
  const deleteAdmin = () => {
    if (confirm("Filial adminini silmək istədiyinizdən əminsiniz?")) {
      console.log("Admin deleted");
    }
  };
  return (
    <div>
      <div className=" mx-auto p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex items-center space-x-6 justify-between">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300">
            <div className="flex items-center justify-center w-full h-full text-3xl text-gray-500">
              <span>
                {admin.name.charAt(0)}
                {admin.surname.charAt(0)}
              </span>
            </div>
          </div>
          <div>
            <button
              onClick={deleteAdmin}
              className="px-3 py-2 bg-red-400 text-white rounded-lg"
            >
              Sil
            </button>

            <button className="px-3 py-2 bg-gray-400 text-white rounded-lg ml-3">
              Blok et !
            </button>
          </div>
        </div>
        <EditForm data={admin} fieldInput={fieldInput} role="admin" />
      </div>
      <ChangePasswordForm role="admin" id={admin.id} />
    </div>
  );
}

export default FilialAdminDetail;
