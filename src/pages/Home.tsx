import { useParams } from "react-router";
import HomeAddPost from "../components/home/HomeAddPost";

function Home() {
  const { role } = useParams();
  return (
    <div className=" ">
      {role == "admin" && (
        <div className="lg:max-w-[calc(100vw_-_350px)] mx-auto overflow-hidden">
          <HomeAddPost />
        </div>
      )}
    </div>
  );
}

export default Home;
