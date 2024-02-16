import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import axios from "axios";

function AddNewBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [bannerImage, setBannerImage] = useState(null);

  const navigateTo = useNavigate();

  const handleAddBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost/3001/blog/create", {
        title,
        description,
      });
      console.log(response.data);
      navigateTo("/");
    } catch (error) {
      console.log("Error while creating blog", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container my-4">
        <h3 className="text-center">Post A New Blog</h3>
        <form onSubmit={handleAddBlog}>
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
          {/* <div className="input-group my-3">
            <input type="file" className="form-control" name="bannerImage" />
          </div> */}
          <div className="mb-3">
            <label className="form-label">Write Blog</label>
            <textarea
              className="form-control"
              name="content"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button className="btn btn-success w-100">Post</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddNewBlog;
