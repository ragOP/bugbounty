import Badegs from "../common/Badegs";
import Cards from "../common/Cards";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import getUserFromJwt from "../../helper/getAccessToken";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const accessToken = localStorage.getItem("accessToken");

  const handlePrevPagination = () => {
    setPage(page - 1);
  };

  const handleNextPagination = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const getPageSize = async () => {
      try {
        const result = await axios.get("http://localhost:3001/blog/pages");
        const totalPages = Math.ceil(result.data / 3);
        setTotalPage(totalPages);
        console.log(totalPage);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
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
        const response = await axios.get(
          `http://localhost:3001/blog?page=${page}`
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error occurred during fetching blogs:", error);
      }
    };
    if (accessToken) fetchUser();
    getPageSize();
    getAllBlogs();
  }, [accessToken, page, totalPage]);

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
      {blogs.length > 0 ? (
        <div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className={page > 1 ? `page-item` : `page-item disabled`}>
                <Link className="page-link" onClick={handlePrevPagination}>
                  Previous
                </Link>
              </li>
              <li
                className={
                  page < totalPage ? `page-item` : `page-item disabled`
                }
              >
                <Link className="page-link" onClick={handleNextPagination}>
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
}

export default HomePage;
