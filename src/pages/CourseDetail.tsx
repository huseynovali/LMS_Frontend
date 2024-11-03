import { useParams } from "react-router";
import { studentCourseData } from "../fakedata";

function CourseDetail() {
    const { id } = useParams();
    
    const course = studentCourseData.find((course) => course.id === id);
console.log(course)
  return (
    <div className="w-full bg-white rounded-lg">
        <div className="p-5">
            <h1 className="text-2xl font-semibold">{course?.name}</h1>
            <p className="text-[#7585A5]">{course?.teacher}</p>
            <p className="text-[#7585A5]">{course?.date}</p>
            <p className="text-[#7585A5]">{course?.time}</p>
        </div>

    </div>
  )
}

export default CourseDetail