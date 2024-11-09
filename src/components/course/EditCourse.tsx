import { Form, Formik } from "formik";
import { useState } from "react";
import { MdClose } from "react-icons/md";

function EditCourse() {
  const [open, setOpen] = useState(false);
  const initialValues = {
    name: "Mənim kurs",
    teacher: "Mənim müəllim",
    time: "10:00",
  };
  return (
    <div >
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 rounded-lg border border-[#3E80F9] text-[#3E80F9] mx-2"
      >
        Redaktə et
      </button>
      {open && <div className="absolute h-[400px] w-[500px] inset-[calc(50%_-_250px)] bg-white border shadow-lg rounded-lg ">
          
          <div className=" flex border border-b py-3 px-2">
                <h1>Redakde et</h1>
                <button onClick={()=>setOpen(false)} className="ml-auto">
                    <MdClose size={20}/>
                </button>
          </div>  
            <div>     
                <Formik initialValues={}>
                     <Form>
                        <div>

                        </div>
                     </Form>
                    
                    </Formik>      
                                               
                                                      
                        
            </div>     

        </div>}
    </div>
  );
}

export default EditCourse;
