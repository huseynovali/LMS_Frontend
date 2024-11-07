import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useParams } from "react-router";

function Resources() {
  const [file, setFile] = React.useState<File | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const filesPerPage = 5;
  const { role } = useParams();
  const formatFileSize = (size: number) => {
    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`;
    } else if (size < 1024 * 1024 * 1024) {
      return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    } else {
      return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
  };

  const files = [
    {
      id: 1,
      name: "Document 1",
      date: "2023-11-01",
      link: "/path/to/document1.pdf",
    },
    {
      id: 2,
      name: "Document 2",
      date: "2023-11-02",
      link: "/path/to/document2.pdf",
    },
    {
      id: 3,
      name: "Document 3",
      date: "2023-11-03",
      link: "/path/to/document3.pdf",
    },
    {
      id: 4,
      name: "Document 4",
      date: "2023-11-04",
      link: "/path/to/document4.pdf",
    },
    {
      id: 5,
      name: "Document 5",
      date: "2023-11-05",
      link: "/path/to/document5.pdf",
    },
    {
      id: 6,
      name: "Document 6",
      date: "2023-11-06",
      link: "/path/to/document6.pdf",
    },
    {
      id: 7,
      name: "Document 7",
      date: "2023-11-07",
      link: "/path/to/document7.pdf",
    },
  ];

  const totalPages = Math.ceil(files.length / filesPerPage);

  const currentFiles = files.slice(
    (currentPage - 1) * filesPerPage,
    currentPage * filesPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl font-semibold mb-4">Vəsaitlər</h2>
        <div className="file-input-wrapper">
          {!file && role !== "student" && (
            <button className="bg-blue-500 text-white h-[30px] px-2 rounded hover:bg-blue-600 relative">
              <input
                type="file"
                className="absolute w-full h-full opacity-0"
                onChange={(e) =>
                  setFile(e.target.files ? e.target.files[0] : null)
                }
              />
              <span>Fayl seç</span>
            </button>
          )}
        </div>
        {file && (
          <div>
            <p>
              {file.name.split(" ").length > 3
                ? file.name.split(" ").slice(0, 3).join(" ") + "..."
                : file.name}
            </p>
            <p>{formatFileSize(file.size)}</p>
            <div className="flex justify-center gap-x-5">
              <button
                className="bg-blue-500 text-white h-[30px] px-2 rounded hover:bg-blue-600"
                onClick={() => setFile(null)}
              >
                Sil
              </button>
              <button className="bg-blue-500 text-white h-[30px] px-2 rounded hover:bg-blue-600">
                Yüklə
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-full overflow-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Fayl Adı</th>
              <th className="py-2 px-4 border-b">Yerləşdirilmə Tarixi</th>
              <th className="py-2 px-4 border-b">Yüklə</th>
              <th className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {currentFiles.map((file) => (
              <tr key={file.id} className="text-center">
                <td className="py-2 px-4 border-b">{file.name}</td>
                <td className="py-2 px-4 border-b">{file.date}</td>
                <td className="py-2 px-4 border-b">
                  <a
                    href={file.link}
                    download
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                  >
                    Yüklə
                  </a>
                </td>
                {role !== "student" && (
                  <td className="py-2 px-4 border-b">
                    <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                      Sil
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
        >
          <FaAngleLeft />
        </button>
        <span className="text-gray-700 mx-2">
          {" "}
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default Resources;
