import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function AddQuestion() {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(null); 

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
  ];

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleAddQuestion = () => {
    const questionData = {
      question: question,
      answers: answers,
      correctAnswer: correctAnswer,
    };
    console.log("Sorğu əlavə edildi:", questionData);



    setQuestion("");
    setAnswers(["", "", "", ""]);
    setCorrectAnswer(null);
  };

  const handleCorrectAnswerChange = (index) => {
    setCorrectAnswer(index); 
  };

  return (
    <div className="w-full rounded-lg bg-white p-5">
      <div className="border-b pb-5 mb-5">
        <p className="text-lg font-semibold mb-2">Sual</p>
        <ReactQuill
          theme="snow"
          value={question}
          onChange={setQuestion}
          formats={formats}
          modules={modules}
        />
      </div>

      <div className="border-b pb-5 mb-5">
        <p className="text-lg font-semibold mb-2">Cavablar</p>
        {answers.map((answer, index) => (
          <div key={index} className="mb-3 ">
            <div className="flex items-center">
            <input
              type="checkbox"
              checked={correctAnswer === index}
              onChange={() => handleCorrectAnswerChange(index)}
              className="mr-2 h-5 w-5"
              
            />
            <p className="font-semibold mr-2">Cavab {index + 1}</p>
            </div>
            <ReactQuill
              theme="snow"
              value={answer}
              onChange={(value) => handleAnswerChange(index, value)}
              formats={formats}
              modules={modules}
              className="w-full"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleAddQuestion}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Əlavə et
      </button>
    </div>
  );
}

export default AddQuestion;
