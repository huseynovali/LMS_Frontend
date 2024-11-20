import CreateGroupForm from "../components/admin/CreateGroupForm";

function CreateGroup() {
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="header py-3 px-5 border-b border-[#D5DBE7]">
        <h1 className="text-2xl font-semibold my-2">Qrup Yarat</h1>
      </div>
      <div>
        <CreateGroupForm />
      </div>
    </div>
  );
}

export default CreateGroup;
