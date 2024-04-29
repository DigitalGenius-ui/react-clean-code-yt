import React, { useEffect } from "react";
import { useGetContextData } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const { addPost, setAddPost, setFilteredPost, isEdit } = useGetContextData();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    setAddPost((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      //update the post
      setFilteredPost((prev) =>
        prev.map((post) => {
          if (post.id === isEdit.id) {
            return {
              ...post,
              title: addPost.title,
              desc: addPost.desc,
              postImg: addPost.postImg,
              category: addPost.category,
              date: new Date(),
            };
          } else {
            return post;
          }
        })
      );
      navigate("/");
    } else {
      setFilteredPost((prev) => [
        ...prev,
        {
          id: Math.floor(Math.random() * 100000),
          ...addPost,
          date: new Date(),
        },
      ]);
      navigate("/");
    }
  };

  useEffect(() => {
    if (isEdit) {
      setAddPost(isEdit);
    } else {
      setAddPost({ title: "", desc: "", postImg: "", category: "" });
    }
  }, [isEdit]);
  return (
    <div className="w-[90%] lg:w-[40rem] mx-auto bg-white/10 p-3 rounded-lg mt-5">
      <h2 className="text-center pb-5 text-2xl">
        {isEdit ? "Update" : "Add"} Post
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input
          value={addPost.title}
          name="title"
          onChange={handleChange}
          placeholder="Title..."
        />
        <textarea
          value={addPost.desc}
          name="desc"
          onChange={handleChange}
          className="p-3 outline-none bg-white/10 text-sm resize-none rounded-md"
          placeholder="Desc..."
          cols="30"
          rows="10"></textarea>
        <Input
          value={addPost.postImg}
          name="postImg"
          onChange={handleChange}
          placeholder="Photo URL..."
        />
        <select
          defaultValue={isEdit ? isEdit.category : "Select a Category"}
          name="category"
          onChange={handleChange}
          className="p-2 outline-none bg-white/10 text-sm rounded-md">
          <option disabled value="Select a Category" className="bg-black/70">
            Select a Category
          </option>
          <option value="nature" className="bg-black/70">
            Nature
          </option>
          <option value="technology" className="bg-black/70">
            Technology
          </option>
          <option value="travel" className="bg-black/70">
            Travel
          </option>
        </select>
        <button className=" w-fit p-2 bg-blue-700 rounded-md px-4 text-sm hover:bg-blue-800">
          {isEdit ? "Update" : "Add"} Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;

const Input = (props) => {
  return (
    <input
      {...props}
      className="p-3 outline-none bg-white/10 text-sm rounded-md"
    />
  );
};
