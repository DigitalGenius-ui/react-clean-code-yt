import { createContext, useContext, useEffect, useState } from "react";

const PostProvider = createContext();
const PostContext = ({ children }) => {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );
  const [filteredPost, setFilteredPost] = useState(posts);

  const [addPost, setAddPost] = useState({
    title: "",
    desc: "",
    postImg: "",
    category: "",
  });

  const [isEdit, setIsEdit] = useState("");

  useEffect(() => {
    if (filteredPost) {
      localStorage.setItem("posts", JSON.stringify(filteredPost));
    }
  }, [filteredPost]);
  return (
    <PostProvider.Provider
      value={{
        posts,
        addPost,
        setAddPost,
        setPosts,
        isEdit,
        setIsEdit,
        filteredPost,
        setFilteredPost,
      }}>
      {children}
    </PostProvider.Provider>
  );
};

export default PostContext;

export const useGetContextData = () => useContext(PostProvider);
