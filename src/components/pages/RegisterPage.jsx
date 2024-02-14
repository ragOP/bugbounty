import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";

function RegisterPage() {
  return (
    <>
      <NavBar />
      <div className="container my-4">
        <h3 className="text-center">Register Page</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="name@example.com"
              name="username"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="12345678"
              name="password"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              rows="2"
            ></textarea>
          </div>
          <div className="input-group my-3">
            <input type="file" className="form-control" name="profilePicture" />
          </div>
          <button className="btn btn-success w-100">Register</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default RegisterPage;
