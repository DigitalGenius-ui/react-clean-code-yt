import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useGetContextData } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

const Actions = ({ post }) => {
  const [showAction, setShowAction] = useState(false);
  const { setIsEdit, setFilteredPost } = useGetContextData();
  const navigate = useNavigate();

  const handleEdit = () => {
    setIsEdit(post);
    navigate("/addPost");
  };

  const handleRemove = () => {
    setFilteredPost((prev) => prev.filter((item) => item.id !== post.id));
  };

  return (
    <div className="absolute top-0 right-0 p-2">
      <div className="relative">
        <button
          onClick={() => setShowAction(!showAction)}
          className="text-2xl hover:bg-black/50 p-3 rounded-lg">
          <BsThreeDots />
        </button>
        {showAction && (
          <div
            className="absolute top-full flex flex-col gap-1 items-start bg-white right-0
         !text-black w-[8rem]">
            <button
              onClick={handleEdit}
              className="p-2 w-full text-start text-sm hover:bg-gray-100">
              Edit
            </button>
            <button
              onClick={handleRemove}
              className="p-2 w-full text-start text-sm hover:bg-gray-100">
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Actions;
