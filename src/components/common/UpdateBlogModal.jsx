function UpdateBlogModal() {
  return (
    <div
      className="modal fade"
      id="editBlogModal"
      aria-labelledby="editBlogModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" name="username" />
              </div>
              <div className="mb-3">
                <label className="form-label">Update Category</label>
                <select className="form-select">
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
                <label className="form-label">Update Blog</label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="3"
                ></textarea>
              </div>
              <div className="input-group my-3">
                <input
                  type="file"
                  className="form-control"
                  name="bannerImage"
                />
              </div>
              <button className="btn btn-success w-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateBlogModal;
