import "./MainLoading.css";

function MainLoading() {
  return (
    <div className="w-full h-full absolute inset-0 z-50 bg-white flex justify-center items-center">
      <div className="book ">
        <div className="book__pg-shadow"></div>
        <div className="book__pg"></div>
        <div className="book__pg book__pg--2"></div>
        <div className="book__pg book__pg--3"></div>
        <div className="book__pg book__pg--4"></div>
        <div className="book__pg book__pg--5"></div>
      </div>
      <h2 className="relative top-24 font-bold text-2xl">Yüklənir ...</h2>
    </div>
  );
}

export default MainLoading;
