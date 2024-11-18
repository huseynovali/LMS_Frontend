import { posts } from "../../fakedata";
import postimage from "../../assets/post.jpg";
function HomePosts() {
  return (
    <div className="w-full  rounded-lg ">
      <div className="grid grid-cols-12 gap-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="col-span-12 md:col-span-6 lg:col-span-3 "
          >
            <img src={postimage} alt="" className="rounded-lg" />
            <h2 className="text-lg font-semibold my-2">
              {post.title.substring(0, 50)}
            </h2>

            <p className="text-gray-500">
              {post.content.length > 100
                ? post.content.substring(0, 100) + "..."
                : post.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePosts;
