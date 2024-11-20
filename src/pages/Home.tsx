import { useParams } from "react-router";
import HomeAddPost from "../components/home/HomeAddPost";
import HomePosts from "../components/home/HomePosts";
import Loading from "./Loading";
import { useState } from "react";

function Home() {
  const { role } = useParams();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className=" ">
      {role == "admin" && (
        <div className="lg:max-w-[calc(100vw_-_350px)] mx-auto overflow-hidden">
          <HomeAddPost />
        </div>
      )}

      <h1 className="font-bold text-2xl my-5">Xəbərlər</h1>
      <HomePosts />
    </div>
  );
}

export default Home;
