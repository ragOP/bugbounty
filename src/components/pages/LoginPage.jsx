import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";

function LoginPage() {
  return (
    <>
      <NavBar />
      <div className="container my-4">
        <h3 className="text-center">Login Page</h3>
        <form>
          <form>
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
            <button className="btn btn-success w-100">Login</button>
          </form>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
