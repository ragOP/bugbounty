import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function UpdateUserModal({ user }) {
  const [data, setData] = useState({
    username: "",
    email: "",
    description: "",
    profilePicture: null,
  });

  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const navigateTo = useNavigate();

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${baseUrl}/user/edit/${user.id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setData(result);
      const sessionId = result.data.sessionId;
      await localStorage.setItem("accessToken", sessionId);
      navigateTo("/");
    } catch (error) {
      console.error("Error occurred during registration:", error);
    }
  };
  useEffect(() => {
    if (user) {
      setData({
        username: user.username,
        email: user.email,
        description: user.description,
      });
    }
  }, [user]);

  return (
    <div>
      <button
        type="button"
        className="btn btn-success mt-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit Profile
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Profile
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleUpdateUser}>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    name="username"
                    value={data.username}
                    onChange={(e) =>
                      setData({ ...data, username: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    name="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    rows="2"
                    value={data.description}
                    onChange={(e) =>
                      setData({ ...data, description: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="input-group my-3">
                  <input
                    type="file"
                    className="form-control"
                    name="profilePicture"
                    onChange={(e) =>
                      setData({ ...data, profilePicture: e.target.files[0] })
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
    </div>
  );
}
export default UpdateUserModal;
