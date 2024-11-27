import { useParams } from "react-router";
import HomeAddPost from "../components/home/HomeAddPost";
import HomePosts from "../components/home/HomePosts";
import Loading from "./Loading";
import { useState } from "react";
import { hasPermission } from "../hooks/hasPermision";

function Home() {
  const { role } = useParams<{ role: "student" | "admin" | "teacher" }>();
  const [loading, setLoading] = useState(true);

  // setTimeout(() => {
  //   setLoading(false);
  // }, 2000);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className=" ">
      {role && hasPermission(role, "add:owncomments") && (
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
