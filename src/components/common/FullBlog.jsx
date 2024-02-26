import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../layout/NavBar";
import getUserFromJwt from "../../helper/getAccessToken";
import Footer from "../layout/Footer";
import formatDate from "../../helper/parseDate";
import getAuthor from "../../helper/getspecificUser";
import CommentBox from "./CommentBox";
import Comments from "./Comments";
import UpdateBlogModal from "./UpdateBlogModal";

function FullBlog() {
  const [blog, setBlog] = useState({});
  const [postComments, setPostComments] = useState([]);
  const [user, setUser] = useState(null);
  const [likes, setLikes] = useState(Number);
  const [disLikes, setDisLikes] = useState(Number);
  const [specificUser, setSpecificUser] = useState("");

  const { id } = useParams();
  const navigateTo = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  const handleDelteBlog = async () => {
    try {
      await axios.get(`http://localhost:3001/blog/delete/${id}`);
      navigateTo("/");
    } catch (error) {
      console.error("Error fetching specific blog:", error);
    }
  };

  const handleLikes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/blog/likes/${id}`
      );
      setLikes(response.data.result.likes);
    } catch (error) {
      console.error("Error liking Blog:", error);
    }
  };

  const handleDisLikes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/blog/dislikes/${id}`
      );
      setDisLikes(response.data.result.dislikes);
    } catch (error) {
      console.error("Error Disliking Blog:", error);
    }
  };

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
        setLikes(response.data.result.likes);
        setDisLikes(response.data.result.dislikes);
      } catch (error) {
        console.error("Error fetching specific blog:", error);
      }
    };

    const fetchSpecificUser = async () => {
      if (blog.author) {
        const authorData = await getAuthor(blog.author);
        setSpecificUser(authorData.username);
      }
    };

    const handleGetAllComments = async () => {
      try {
        const result = await axios.get(`http://localhost:3001/comment/${id}`);
        setPostComments(result.data);
      } catch (error) {
        console.error("Error fetching specific comment:", error);
      }
    };

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (accessToken) fetchUser();
    getSpecificBlog();
    fetchSpecificUser();
    handleGetAllComments();
  }, [id, accessToken, blog.author]);
  return (
    <div>
      <UpdateBlogModal blog={blog} />
      <NavBar user={user} />
      <div className="container d-flex justify-content-center flex-column">
        <h1 className="mt-4 text-center">{blog.title}</h1>

        <div className="mb-3 text-center">
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
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
        {user && specificUser === user.username ? (
          <div className="mt-4">
            <button
              type="button"
              className="btn btn-primary btn-sm me-2"
              data-bs-toggle="modal"
              data-bs-target="#editBlogModal"
            >
              Edit <i className="bi bi-pencil-fill ms-1"></i>
            </button>

            <button className="btn btn-danger btn-sm" onClick={handleDelteBlog}>
              Delete <i className="bi bi-trash3-fill ms-1"></i>
            </button>
          </div>
        ) : (
          ""
        )}
        <div
          className="mt-3 d-flex align-items-center"
          style={{ fontSize: "22px" }}
        >
          <i
            className="bi bi-hand-thumbs-up"
            style={{ cursor: "pointer" }}
            onClick={handleLikes}
          ></i>{" "}
          <span style={{ fontSize: "18px", marginLeft: "5px" }}>{likes}</span>
          <i
            className="bi bi-hand-thumbs-down ms-3"
            style={{ cursor: "pointer" }}
            onClick={handleDisLikes}
          ></i>{" "}
          <span style={{ fontSize: "18px", marginLeft: "5px" }}>
            {disLikes}
          </span>
        </div>
        <p
          className="my-3"
          style={{ lineHeight: "34px", textAlign: "justify" }}
        >
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </p>
        {user ? <CommentBox user={user.id} id={id} /> : ""}
        {postComments.length > 0 ? (
          postComments.map((comment) => (
            <Comments
              key={comment._id}
              comment={comment.content}
              user={comment.author}
            />
          ))
        ) : (
          <div className="my-3">
            <h3>No Comments Yet</h3>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default FullBlog;
