import CreateGroupForm from "../components/admin/CreateGroupForm";
import MainContainer from "../components/CustomComponent/MainContainer";

function CreateGroup() {
  return (
    <MainContainer>
      <div className="header py-3 px-5 border-b border-[#D5DBE7]">
        <h1 className="text-2xl font-semibold my-2">Qrup Yarat</h1>
      </div>
      <div>
        <CreateGroupForm />
      </div>
    </MainContainer>
  );
}

export default CreateGroup;
