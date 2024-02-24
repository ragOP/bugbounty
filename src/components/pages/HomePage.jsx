import Badegs from "../common/Badegs";
import Cards from "../common/Cards";
import NavBar from "../layout/NavBar";
import Pagination from "../common/Pagination";
import Footer from "../layout/Footer";
import getUserFromJwt from "../../helper/getAccessToken";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      {user && blogs.length ? <Badegs /> : ""}
      {blogs.length > 0 ? (
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
      ) : (
        <div
          className="container d-flex align-items-center justify-content-center flex-column"
          style={{
            height: "50vh",
          }}
        >
          <div className="alert alert-primary" role="alert">
            No Blogs Available, Write Blogs!
          </div>
          {user ? (
            <Link to="/postblog" className="btn btn-primary btn-sm">
              {" "}
              Go To Post Blog
            </Link>
          ) : (
            <div className="d-flex align-items-center justify-content-center">
              <Link to="/user/login" className="btn btn-primary btn-sm me-3">
                Login
              </Link>
              <Link to="/user/register" className="btn btn-primary btn-sm">
                Register
              </Link>
            </div>
          )}
        </div>
      )}
      {user && blogs.length > 0 ? <Pagination /> : ""}

      <Footer />
    </div>
  );
}

export default HomePage;
