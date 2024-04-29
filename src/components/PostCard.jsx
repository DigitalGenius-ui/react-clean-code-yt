import React from "react";
import Actions from "./Actions";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const { desc, title, postImg } = post;
  const navigate = useNavigate();
  return (
    <article className="bg-white/10 rounded-lg overflow-hidden relative">
      <Actions post={post} />
      <img className="w-full h-60 object-cover" src={postImg} alt="post-img" />
      <div
        onClick={() => navigate(`/singlePost/${post.id}`)}
        className="p-3 cursor-pointer hover:opacity-70">
        <h3 className="text-xl font-semibold pb-2">{title}</h3>
        <p className="line-clamp-3 opacity-65 text-sm">{desc}</p>
      </div>
    </article>
  );
};

export default PostCard;
