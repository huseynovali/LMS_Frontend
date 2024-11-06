import  { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { allStudents, coursesStudents } from "../../fakedata";
import { FaSearch } from "react-icons/fa";
import useDebonce from "../../hooks/useDebonce";

interface Student {
  id: number;
  name: string;
  surname: string;
  phone: string;
}

function AddStudent() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [searchStudent, setSearchStudent] = useState<Student[]>([]);
  const data = allStudents;
  const debonce = useDebonce(search, 500);

  const addStudentFunc = (student: Student) => {
    console.log(student);
  };

  useEffect(() => {
    if (debonce) {
      const result = data.filter((student) =>
        student.name.toLowerCase().includes(debonce.toLowerCase())
      );
      setSearchStudent(result);
    } else {
      setSearchStudent([]);
    }
  }, [debonce]);

  return (
    <div>
      <button
        className="bg-[#3e80f9] text-white px-2 py-2 rounded-md text-sm"
        onClick={() => setShowModal(true)}
      >
        Tələbə əlavə et
      </button>

      {showModal && (
        <div className="absolute bg-gray-100 lg:w-[500px] lg:h-[500px] overflow-auto p-3 lg:left-[40%] lg:top-[20%] inset-0 border rounded-lg shadow-2xl">
          <h1 className="text-center text-lg font-semibold p-2">
            Tələbə əlavə et
          </h1>
          <button
            className="absolute right-2 top-2"
            onClick={() => setShowModal(false)}
          >
            <MdClose size={24} />
          </button>

          <div>
            <div className="w-full flex border bg-white rounded-lg items-center">
              <FaSearch className="mx-2 text-gray-400" />
              <input
                type="text"
                name="name"
                id="name"
                className="w-full h-full rounded-lg outline-none p-2"
                placeholder="Tələbə adı axtarın..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div>
            <ul>
              {searchStudent.length > 0
                ? searchStudent.map((student) =>
                    coursesStudents.find((s) => s.id === student.id) ? null : (
                      <li
                        key={student?.id}
                        className="flex justify-between p-2 bg-white my-2 rounded-md"
                      >
                        <p>
                          {student?.name} {student?.surname} {student?.phone}
                        </p>
                        <button
                          className="bg-[#3e80f9] text-white px-2 py-1 rounded-md text-sm"
                          onClick={() => addStudentFunc(student)}
                        >
                          Əlavə et
                        </button>
                      </li>
                    )
                  )
                : debonce && (
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

export default AddStudent;
