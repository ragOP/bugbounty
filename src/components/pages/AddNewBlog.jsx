import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";

function AddNewBlog() {
  return (
    <>
      <NavBar />
      <div className="container my-4">
        <h3 className="text-center">Post A New Blog</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <textarea
              className="form-control"
              name="description"
              rows="2"
            ></textarea>
          </div>
          <div className="input-group my-3">
            <input type="file" className="form-control" name="bannerImage" />
          </div>
          <div className="mb-3">
            <label className="form-label">Write Blog</label>
            <textarea
              className="form-control"
              name="content"
              rows="5"
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