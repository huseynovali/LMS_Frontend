import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import useDebonce from "../../hooks/useDebonce";
import { teachers } from "../../fakedata";

interface Teacher {
  id: number;
  name: string;
  surname: string;
  phone: string;
}

function GroupTeacher({ course, role }: { course: any; role: string }) {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [searchTeacher, setSearchTeacher] = useState<Teacher[]>([]);
  const debouncedSearch = useDebonce(search, 500);
  const data = teachers;

  useEffect(() => {
    if (debouncedSearch) {
      const result = data.filter((teacher) =>
        teacher.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setSearchTeacher(result);
    } else {
      setSearchTeacher([]);
    }
  }, [debouncedSearch]);
  

  const addTeacherFunc = (teacher: Teacher) => {
    course.teacher = teacher;
    setShow(false);
  };

  return (
    <div>
      {role === "admin" && course?.teacher ? (
        <button
          className="px-3 py-2 bg-red-400 text-white rounded-lg"
          onClick={() => setShow(false)}
        >
          Müəllimi sil
        </button>
      ) : (
        <button
          className="px-3 py-2 bg-gray-400 text-white rounded-lg"
          onClick={() => setShow(true)}
        >
          Müəllim əlavə et
        </button>
      )}

      {show && (
        <div className="absolute bg-gray-100 z-20 lg:w-[500px] lg:h-[500px] overflow-auto p-3 lg:left-[40%] lg:top-[20%] inset-0 border rounded-lg shadow-2xl">
          <h1 className="text-center text-lg font-semibold p-2">
            Müəllim əlavə et
          </h1>
          <button
            className="absolute right-2 top-2"
            onClick={() => setShow(false)}
          >
            <MdClose size={24} />
          </button>

          <div className="w-full flex border bg-white rounded-lg items-center">
            <FaSearch className="mx-2 text-gray-400" />
            <input
              type="text"
              name="name"
              id="name"
              className="w-full h-full rounded-lg outline-none p-2"
              placeholder="Müəllim adı axtarın..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div>
            <ul>
              {searchTeacher.length > 0
                ? searchTeacher.map((teacher) =>
                    course?.teacher?.id === teacher.id ? null : (
                      <li
                        key={teacher?.id}
                        className="flex justify-between p-2 bg-white my-2 rounded-md"
                      >
                        <p>
                          {teacher?.name} {teacher?.surname} - {teacher?.phone}
                        </p>
                        <button
                          className="bg-[#3e80f9] text-white px-2 py-1 rounded-md text-sm"
                          onClick={() => addTeacherFunc(teacher)}
                        >
                          Əlavə et
                        </button>
                      </li>
                    )
                  )
                : debouncedSearch && (
                    <p className="text-center text-gray-500 p-4">
                      Heç bir nəticə tapılmadı
                    </p>
                  )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default GroupTeacher;
