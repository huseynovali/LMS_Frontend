import { useParams } from "react-router";
import HomeAddPost from "../components/home/HomeAddPost";
import HomePosts from "../components/home/HomePosts";

function Home() {
  const { role } = useParams();
  return (
    <div className=" ">
      {role == "admin" && (
        <div className="lg:max-w-[calc(100vw_-_350px)] mx-auto overflow-hidden">
          <HomeAddPost />
        </div>
      )}

      <h1 className="font-bold text-2xl mb-3">Xəbərlər</h1>
      <HomePosts />
    </div>
  );
}

export default Home;
