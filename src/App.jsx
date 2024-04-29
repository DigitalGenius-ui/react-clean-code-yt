import { Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";
import SinglePost from "./components/SinglePost";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useGetContextData } from "./context/PostContext";

function App() {
  const { text } = useGetContextData();
  return (
    <section className="w-[90%] md:w-[70%] mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/singlePost/:id" element={<SinglePost />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
