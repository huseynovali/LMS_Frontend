import { Link } from "react-router-dom";
import { studentCourseData } from "../fakedata";

function Courses() {
  return (
    <div className="w-full bg-white p-5 rounded-lg">
      <h1 className="text-2xl font-semibold">Dərslər</h1>
      <div>
        <ul className="grid grid-cols-12 gap-x-5 ">
          {studentCourseData.map((course) => (
            <li
              key={course.id}
              className="my-4  border border-[#D5DBE7] rounded-lg col-span-12 md:col-span-6 lg:col-span-4"
            >
              <Link to={`/student/courses/${course.id}`} className="p-2">
                <div className="">
                  <div className="ml-4">
                    <h1 className="text-xl font-semibold">{course.name}</h1>
                    <p className="text-[#7585A5]">{course.teacher}</p>
                    <p className="text-[#7585A5]">{course.date}</p>
                    <p className="text-[#7585A5]">{course.time}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Courses;