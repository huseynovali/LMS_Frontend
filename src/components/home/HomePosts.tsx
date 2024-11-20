import { posts } from "../../fakedata";
import { Link } from "react-router-dom";
function HomePosts() {
  return (
    <div className="w-full  rounded-lg ">
      <div className="grid grid-cols-12 gap-5 ">
        {posts.map((post) => (
          <Link
            to={`/post/${post.id}`}
            key={post.id}
            className="col-span-12 md:col-span-6 lg:col-span-3  relative border p-5 rounded-md shadow-sm hover:scale-[1.03]"
          >
            <h2 className="text-lg font-semibold my-2">
              {post.title.split(" ").slice(0, 10).join(" ")}
            </h2>
            <div className="h-[120px]">
              <p className="text-gray-500">
                {post.content.length > 100
                  ? post.content.substring(0, 100) + "..."
                  : post.content}
              </p>
            </div>

            <div className="flex justify-between items-center mt-3 px-5 absolute bottom-5 w-full left-0">
              <span className="text-gray-500">{post.date}</span>
              <span className="text-gray-500"> {post.author}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePosts;
