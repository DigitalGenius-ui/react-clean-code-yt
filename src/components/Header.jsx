import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetContextData } from "../context/PostContext";

const Header = () => {
  const navigate = useNavigate();
  const { posts, setFilteredPost } = useGetContextData();
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (category) {
      if (category === "all") {
        setFilteredPost(posts);
      } else {
        const filter = posts.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
        setFilteredPost(filter);
      }
    }
  }, [category, posts, setFilteredPost]);

  return (
    <header
      className="flex items-center justify-between py-5 
      border border-white/40 mt-6 px-4 rounded-lg bg-white/10">
      <h1 className="uppercase text-2xl">logo</h1>
      <div className="flex items-center gap-5">
        <select
          onChange={(e) => setCategory(e.target.value)}
          defaultValue="Filter By Category"
          className="p-2 outline-none bg-white/10 text-sm rounded-md">
          <option disabled value="Filter By Category" className="bg-black/70">
            Filter By Category
          </option>
          <option value="all" className="bg-black/70">
            All
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
        <button
          onClick={() => navigate(`/addPost`)}
          className="p-2 bg-blue-700 rounded-md px-4 text-sm hover:bg-blue-800">
          Add Post
        </button>
      </div>
    </header>
  );
};

export default Header;
