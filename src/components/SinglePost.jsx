import { useParams } from "react-router-dom";
import { useGetContextData } from "../context/PostContext";

const SinglePost = () => {
  const { filteredPost} = useGetContextData();
  const { id } = useParams();
  const findPost = filteredPost.find((post) => post.id === +id);
  const { desc, title, postImg } = findPost;
  return (
    <div className="my-5">
      <h3 className="text-3xl font-bold pb-5">{title}</h3>
      <img
        className="h-[400px] object-cover w-full"
        src={postImg}
        alt="post-img"
      />
      <p className="leading-2 pt-4">{desc}</p>
    </div>
  );
};

export default SinglePost;
