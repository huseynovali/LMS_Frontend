import { RiAdminLine } from "react-icons/ri";
import MainContainer from "../components/CustomComponent/MainContainer";
import { filials } from "../fakedata";
import { IoRemoveCircleOutline } from "react-icons/io5";
import RemoveAdmin from "../components/superadminPanel/RemoveAdmin";
import { Link } from "react-router-dom";

function FilialDetail() {
  const data = filials[0];
  return (
    <MainContainer>
      <div className="p-2">
        <div className=" flex justify-between">
          <div className="ml-4">
            <h1 className="text-xl font-semibold">{data.name}</h1>
            <p className="text-[#7585A5]">{data.address}</p>
          </div>
          <div>
            <h1 className="text-lg font-bold mb-3">Adminlər</h1>
            {data.admins.map((admin) => (
              <Link
                to={`/superadmin/admins/${admin.id}`}
                key={admin.id}
                className="flex gap-x-2 my-1 hover:scale-[1.02] items-center"
              >
                <RiAdminLine />
                <span className="text-[16px] font-bold min-w-[120px]">
                  {admin.name} {admin.surname}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

export default FilialDetail;
