import { Link, useParams } from "react-router-dom";
import { PostDetailData } from "../../fakedata";
import { FaChevronLeft } from "react-icons/fa";

import postImage from "../../assets/post.jpg";
function PostDetail() {
  const { role } = useParams();
  return (
    <div>
      <Link to={`/${role}`}>
        <div className="w-[150px] rounded-full  flex  items-center">
          <FaChevronLeft className=" text-[#3E80F9]" size={24} />
          <span className="text-lg font-semibold text-[#3E80F9] ml-2">
            Geri Qayıt{" "}
          </span>
        </div>
      </Link>
      <div className="mt-5">
        <h1 className="text-3xl font-bold ">{PostDetailData.title}</h1>

        <div className="flex justify-end items-center my-2">
          <span className="text-gray-500">{PostDetailData.date}</span>
        </div>
        <div>
          <img
            src={postImage}
            alt=""
            className="max-h-[500px] w-full rounded-lg"
          />
          <p className="my-5">{PostDetailData.content}</p>
        </div>

        <div className="flex justify-end items-center">
          <span className=" text-xl text-gray-500">
            {PostDetailData.author}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
