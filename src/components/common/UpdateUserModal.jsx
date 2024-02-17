import PropTypes from "prop-types";
function UpdateUserModal({ user }) {
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
              <form>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    name="username"
                    value={user.username}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    name="email"
                    value={user.email}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    rows="2"
                    value={user.description}
                  ></textarea>
                </div>
                <div className="input-group my-3">
                  <input
                    type="file"
                    className="form-control"
                    name="profilePicture"
                  />
                </div>
                <button className="btn btn-success w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

UpdateUserModal.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default UpdateUserModal;
