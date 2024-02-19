import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../layout/NavBar";
import getUserFromJwt from "../../helper/getAccessToken";
import Footer from "../layout/Footer";
import formatDate from "../../helper/parseDate";
import getAuthor from "../../helper/getspecificUser";

function FullBlog() {
  const [blog, setBlog] = useState({});
  const [user, setUser] = useState(null);
  const [specificUser, setSpecificUser] = useState("");

  const { id } = useParams();
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

    const getSpecificBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/blog/${id}`);
        setBlog(response.data.result);
      } catch (error) {
        console.error("Error fetching specific blog:", error);
      }
    };

    const fetchSpecificUser = async () => {
      if (blog.author) {
        const authorData = await getAuthor(blog.author);
        setSpecificUser(authorData);
      }
    };
    if (accessToken) fetchUser();
    getSpecificBlog();
    fetchSpecificUser();
  }, [id, accessToken, blog.author]);
  return (
    <div>
      <NavBar user={user} />
      <div className="container d-flex align-items-center justify-content-center flex-column">
        <h1 className="mt-4 text-center">{blog.title}</h1>

        <div className="mb-3">
          <span
            className="badge bg-primary mx-1 my-2"
            style={{ cursor: "pointer" }}
          >
            Article by - {specificUser}
          </span>
          <span
            className="badge bg-primary mx-1 my-2"
            style={{ cursor: "pointer" }}
          >
            Created On - {formatDate(blog.createdAt)}
          </span>
          <span
            className="badge bg-primary mx-1 my-2"
            style={{ cursor: "pointer" }}
          >
            Total Views - {blog.totalViews}
          </span>
          <span
            className="badge bg-primary mx-1 my-2"
            style={{ cursor: "pointer" }}
          >
            {blog.category}
          </span>
          <span
            className="badge bg-primary mx-1 my-2"
            style={{ cursor: "pointer" }}
          >
            Read Time - {blog.readTime} min
          </span>
        </div>
        <img
          src={`http://localhost:3001/${blog.bannerImage}`}
          alt="thumbnail image"
          style={{ width: "100%", height: "300px" }}
        />
        <div className="mt-4">
          <button className="btn btn-primary me-3 btn-sm">Edit</button>
          <button className="btn btn-danger btn-sm">Delete</button>
        </div>
        <p className="my-4" style={{ lineHeight: "34px" }}>
          {blog.content}
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default FullBlog;
