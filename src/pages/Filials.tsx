import { useParams } from "react-router";
import MainContainer from "../components/CustomComponent/MainContainer";
import { filials } from "../fakedata";
import { Link } from "react-router-dom";

function Filials() {
  const { role } = useParams();
  return (
    <MainContainer>
      {
        <ul className="grid grid-cols-12 gap-x-5 ">
          {filials.map((filial) => (
            <li
              key={filial.id}
              className="my-4  border border-[#D5DBE7] rounded-lg col-span-12 md:col-span-6 lg:col-span-4"
            >
              <Link
                to={`/${role}/filialsdetail/${filial.id}`}
                state={{ courseId: filial.id }}
                className="p-2"
              >
                <div className="">
                  <div className="ml-4">
                    <h1 className="text-xl font-semibold">{filial.name}</h1>
                    <p className="text-[#7585A5]">{filial.address}</p>
                    <p className="text-[#7585A5]">{filial.phone}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      }
    </MainContainer>
  );
}

export default Filials;
