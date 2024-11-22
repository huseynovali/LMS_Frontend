import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import MainContainer from "../components/CustomComponent/MainContainer";

function AddQuestion() {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [subjectId, setSubjectId] = useState(1); // Seçilmiş mövzu ID
  const subjects = [
    { id: 1, name: "Fizika" },
    { id: 2, name: "Kimya" },
    { id: 3, name: "Riyaziyyat" },
    { id: 4, name: "Astronomiya" },
  ];

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

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const handleAddQuestion = () => {
    const questionData = {
      question,
      answers,
      correctAnswer,
      subjectId,
    };
    console.log("Sorğu əlavə edildi:", questionData);

    setQuestion("");
    setAnswers(["", "", "", ""]);
    setCorrectAnswer(null);
    setSubjectId(1);
  };

  const handleCorrectAnswerChange = (index) => {
    setCorrectAnswer(index);
  };

  return (
    <MainContainer>
      <div className="border-b pb-5 mb-5">
        <div className="flex justify-between mb-3">
          <p className="text-lg font-semibold mb-2">Sual</p>
          <select
            value={subjectId}
            onChange={(e) => setSubjectId(Number(e.target.value))}
            className="outline-none"
          >
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>
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
          <div key={index} className="mb-3">
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
    </MainContainer>
  );
}

export default AddQuestion;
