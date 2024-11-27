import { MdClose } from "react-icons/md";
import { useParams } from "react-router";
import { hasPermission } from "../../hooks/hasPermision";

function DateDetail({
  selectCourse,
  setSelectCourse,
}: {
  selectCourse: any;
  setSelectCourse: any;
}) {
  const { role } = useParams<{ role: "admin" | "student" | "teacher" }>();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[300px] h-[300px]   shadow-lg border bg-white   absolute lg:inset-[40%] z-30 rounded-lg">
        <div className="p-2">
          <div className="px-2 py-3 border-b">
            <p className="text-xl font-semibold">{selectCourse.name}</p>
            <MdClose
              size={20}
              onClick={() => setSelectCourse(null)}
              className="absolute right-2 top-2 cursor-pointer"
            />
          </div>
          <p className="text-xl my-2">Müellim : {selectCourse.teacher}</p>
          <p className="text-xl my-2">Saat : {selectCourse.time}</p>
          <p className="text-xl my-2">Gün : {selectCourse.days}</p>
          {role && hasPermission(role, "update:comments") && (
            <div className="mt-5">
              <button className="px-3 py-2 rounded-lg bg-gray-500 text-white">
                Saatı dəyiş
              </button>
              <button className="px-3 py-2 rounded-lg  bg-red-400 text-white mx-2">
                Təxirə sal
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DateDetail;
