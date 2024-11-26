import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { MdClose } from "react-icons/md";

function EditCourse({ course }: { course: any }) {
  const [open, setOpen] = useState(false);
  const initialValues = {
    name: course.name || "",
    teacher: course.teacher || "",
    time: course.time || "",
    days: course.days || "",
  };

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 rounded-lg border border-[#3E80F9] text-[#3E80F9] mx-2"
      >
        Redaktə et
      </button>
      {open && (
        <div className="absolute w-full md:w-[80%] md:inset-x-[calc(50%_-_40%)] z-30 lg:max-w-[500px] inset-x-0  lg:inset-[calc(50%_-_250px)] bg-white border shadow-lg rounded-lg ">
          <div className=" flex border border-b py-3 px-2">
            <h1>Redakde et</h1>
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="ml-auto"
            >
              <MdClose size={20} />
            </button>
          </div>
          <div>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form className="p-3 flex flex-1 flex-col gap-3">
                <div>
                  <label htmlFor="name">Kurs adı:</label>
                  <Field
                    name="name"
                    placeholder="Kurs adı"
                    className="w-full p-2 outline-none border border-[#3E80F9] rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="teacher">Müəllim:</label>
                  <Field
                    name="teacher"
                    placeholder="Müəllim"
                    className="w-full p-2 outline-none border border-[#3E80F9] rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="time">Vaxt:</label>
                  <Field
                    name="time"
                    placeholder="Vaxt"
                    className="w-full p-2 outline-none border border-[#3E80F9] rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="days">Günlər:</label>
                  <Field
                    name="days"
                    placeholder="Günlər"
                    className="w-full p-2 outline-none border border-[#3E80F9] rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#3E80F9] text-white p-2 rounded-lg"
                >
                  Təstiq et !
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditCourse;
