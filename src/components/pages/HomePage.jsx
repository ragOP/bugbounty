import Badegs from "../common/Badegs";
import Cards from "../common/Cards";
import NavBar from "../layout/NavBar";
import Pagination from "../common/Pagination";
import Footer from "../layout/Footer";
import getUserFromJwt from "../../helper/getAccessToken";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserFromJwt(accessToken);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    const getAllBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3001/blog/");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error occurred during fetching blogs:", error);
      }
    };
    if (accessToken) fetchUser();
    getAllBlogs();
  }, [accessToken]);

  return (
    <div>
      <NavBar user={user} />
      <Badegs />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        {blogs.map((blog) => (
          <Cards
            key={blog._id}
            bannerImage={blog.bannerImage}
            _id={blog._id}
            title={blog.title}
            content={blog.content}
            category={blog.category}
            totalViews={blog.totalViews}
            readTime={blog.readTime}
            createdAt={blog.createdAt}
            author={blog.author}
          />
        ))}
      </div>
      <Pagination />
      <Footer />
    </div>
  );
}

export default HomePage;
