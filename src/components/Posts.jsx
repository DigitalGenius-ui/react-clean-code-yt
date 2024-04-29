import React from "react";
import PostCard from "./PostCard";
import { useGetContextData } from "../context/PostContext";

const Posts = () => {
  const { filteredPost } = useGetContextData();
  return (
    <div className="grid grid-cols-postsGrid gap-4 my-6">
      {filteredPost && filteredPost.length <= 0 ? (
        <h3 className="text-sm opacity-75">No Post Exist</h3>
      ) : (
        filteredPost.map((post) => <PostCard post={post} key={post.id} />)
      )}
    </div>
  );
};

export default Posts;
