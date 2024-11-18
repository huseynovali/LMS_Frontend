import { Outlet, useLocation, useParams } from "react-router";
import { studentCourseData } from "../fakedata";
import { Link } from "react-router-dom";
import GroupTeacher from "../components/course/GroupTeacher";
import EditCourse from "../components/course/EditCourse";

const tabs = {
  student: [
    {
      name: "Vesaitlər",
      link: "resources",
    },
    {
      name: "Qayıblar",
      link: "absences",
    },
  ],
  teacher: [
    {
      name: "Tələbələr",
      link: "coursestudents",
    },
    {
      name: "Vesaitlər",
      link: "resources",
    },
  ],
  admin: [
    {
      name: "Tələbələr",
      link: "coursestudents",
    },
    {
      name: "Vesaitlər",
      link: "resources",
    },
  ],
};

function CourseDetail() {
  const { id } = useParams();
  const { role } = useParams<{ role: keyof typeof tabs }>();
  const course = studentCourseData.find((course) => course.id == id);
  const location = useLocation();
  const activetab =
    location.pathname.split("/")[location.pathname.split("/").length - 1];
  return (
    <div>
      <div className="w-full bg-white rounded-lg">
        <div className="p-5 flex justify-between">
          <div>
            <h1 className="text-2xl font-semibold my-2">{course?.name}</h1>
            <p className="text-[#7585A5] my-2">{course?.teacher}</p>
          </div>

          <div className="flex flex-col justify-center items-end">
            {" "}
            <div>
              {role == "admin" && (
                <div className="flex">
                  <button className="px-5 py-2 rounded-lg bg-red-400 text-white">
                    Sil
                  </button>
                   <EditCourse course ={course}/>
                </div>
              )}
            </div>
            <p className="text-[#7585A5] my-2">{course?.days}</p>
            <p className="text-[#7585A5] my-2">{course?.time}</p>
            {role == "admin" && <GroupTeacher course={course} role={role} />}
          </div>
        </div>
        <div className="px-3 overflow-auto mt-5">
          <ul className="flex gap-x-4">
            {role &&
              tabs[role]?.map((tab) => (
                <Link
                  to={`/${role}/courses/${id}/${tab.link}`}
                  key={tab.name}
                  className={`${
                    activetab == tab.link ? "bg-[#ECF2FE] text-[#3e80f9]" : ""
                  } py-2 px-4  rounded-t-lg`}
                >
                  {tab.name}
                </Link>
              ))}
          </ul>
        </div>
      </div>

      <div className="w-full bg-white rounded-lg mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default CourseDetail;
