import logo from "../../assests/logo.png";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ user }) {
  const navigateTo = useNavigate();
  function logoutUser() {
    localStorage.removeItem("accessToken");
    navigateTo("/");
    window.location.reload();
  }

  const localUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid container-lg">
        <Link className="navbar-brand" to="/">
          <img src={logo} style={{ width: "140px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            {user ? (
              <li className="nav-item dropdown d-flex align-items-center ms-3-lg">
                <img
                  src={`${localUrl}/${user.profilePicture}`}
                  alt="profile"
                  style={{ width: "25px", borderRadius: "50%", height: "25px" }}
                  className="mb-3"
                />
                <p
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  {user.username}
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/user/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/postblog">
                      Post Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/user/blogs">
                      My Blogs
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" onClick={logoutUser}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/user/login">
                  Login
                </Link>
              </li>
            )}
            {!user && (
              <li className="nav-item">
                <Link className="nav-link" to="/user/register">
                  Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
