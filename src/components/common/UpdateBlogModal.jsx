import axios from "axios";
import { useEffect, useState, useRef } from "react";
import JoditEditor from "jodit-react";
function UpdateBlogModal({ blog }) {
  const editor = useRef(null);
  const [data, setData] = useState({
    title: "",
    category: "",
    content: "",
    bannerImage: null,
  });

  useEffect(() => {
    if (blog) {
      setData({
        title: blog.title,
        category: blog.category,
        content: blog.content,
      });
    }
  }, [blog]);

  const handleUpdateblog = async (e) => {
    e.preventDefault();
    try {
      const id = blog._id;
      const result = await axios.post(
        `http://localhost:3001/blog/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setData(result);
      window.location.reload();
      window.re;
    } catch (error) {
      console.error("Error occurred during registration:", error);
    }
  };
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
            <form onSubmit={handleUpdateblog}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={data.title}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Update Category</label>
                <select
                  className="form-select"
                  onChange={(e) =>
                    setData({ ...data, category: e.target.value })
                  }
                >
                  <option value="">{data.category}</option>
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
                <JoditEditor
                  ref={editor}
                  tabIndex={1}
                  value={data.content}
                  onBlur={() => {
                    if (editor.current) {
                      const newContent = editor.current.editor.value;
                      setData({ ...data, content: newContent });
                    }
                  }}
                  onChange={(newContent) =>
                    setData({ ...data, content: newContent })
                  }
                />
              </div>
              <div className="input-group my-3">
                <input
                  type="file"
                  className="form-control"
                  name="bannerImage"
                  onChange={(e) =>
                    setData({ ...data, bannerImage: e.target.files[0] })
                  }
                />
              </div>
              <button className="btn btn-success w-100" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateBlogModal;
