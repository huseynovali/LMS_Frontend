import { useState } from "react";
import ReactQuill from "react-quill";

function HomeAddPost() {
  const [post, setPost] = useState("");
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ script: "sub" }, { script: "super" }],
      ["link"],
      ["blockquote"],
      ["code-block"],
      ["formula"],
      [{ color: [] }, { background: [] }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "script",
    "code-block",
    "formula",
    "font",
    "color",
    "background",
    "clean",
  ];
  return (
    <div className="bg-white  px-5 py-3 rounded-lg  overflow-hidden">
      <ReactQuill
        theme="snow"
        value={post}
        onChange={setPost}
        formats={formats}
        modules={modules}
        className="w-full"
      />

      <button className="btn px-3 py-2 bg-[#3E80F9] text-white rounded-lg mt-3">
        Paylaş
      </button>
    </div>
  );
}

export default HomeAddPost;
