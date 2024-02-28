import { useEffect, useState, useRef } from "react";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import getUserFromJwt from "../../helper/getAccessToken";
import axios from "axios";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function AddNewBlog() {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [category, setCategory] = useState("");
  const [progress, setProgress] = useState(0);

  const editor = useRef(null);

  const accessToken = localStorage.getItem("accessToken");
  const navigateTo = useNavigate();

  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

  const handleCreateNewBlog = async (e) => {
    e.preventDefault();
    try {
      const blog = await axios.post(
        `${baseUrl}/blog/create`,
        {
          title,
          author: user.id,
          description,
          bannerImage,
          category,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigateTo(`/blog/${blog.data._id}`);
      console.log(blog);
    } catch (error) {
      console.error("Error occurred during creating new blog:", error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setProgress(50);
        const userData = await getUserFromJwt(accessToken);
        setUser(userData);
        setProgress(100);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (accessToken) fetchUser();
  }, [accessToken]);

  return (
    <>
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <NavBar user={user} />
      <div className="container my-4">
        <h3 className="text-center">Post A New Blog</h3>
        <form onSubmit={handleCreateNewBlog}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <textarea
              className="form-control"
              name="description"
              rows="2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
          </div>
          <div className="input-group my-3">
            <input
              type="file"
              className="form-control"
              name="bannerImage"
              onChange={(e) => setBannerImage(e.target.files[0])}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="Tech Updates">Tech Updates</option>
              <option value="React Js">React Js</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
              <option value="C++">C++</option>
              <option value="Ruby">Ruby</option>
              <option value="PHP">PHP</option>
              <option value="Swift">Swift</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Write Blog</label>
            <JoditEditor
              ref={editor}
              tabIndex={1}
              value={description}
              onBlur={(newContent) => setDescription(newContent)}
              onChange={(newContent) => {
                setDescription(newContent);
              }}
            />
          </div>
          <button className="btn btn-success w-100">Post</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddNewBlog;
