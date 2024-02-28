import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import Cards from "./Cards";
import getUserFromJwt from "../../helper/getAccessToken";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function BlogPage() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [progress, setProgress] = useState(0);

  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setProgress(30);
        const userData = await getUserFromJwt(accessToken);
        setUser(userData);
        setProgress(50);
        const result = await axios.get(`${baseUrl}/blog/user/${userData.id}`);
        setProgress(80);
        setBlogs(result.data.result);
        setProgress(100);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (accessToken) fetchUser();
  }, [accessToken, baseUrl]);

  return (
    <div>
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <NavBar user={user} />
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
          <Link to="/postblog" className="btn btn-primary btn-sm">
            {" "}
            Go To Post Blog
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default BlogPage;
