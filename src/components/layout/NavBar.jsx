import logo from "../../assests/logo.png";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function NavBar({ user }) {
  const navigateTo = useNavigate();
  function logoutUser() {
    localStorage.removeItem("accessToken");
    navigateTo("/");
    window.location.reload();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex align-items-center justify-content-around">
        <Link to="/">
          <img className="navbar-brand" src={logo} style={{ width: "140px" }} />
        </Link>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
              <li className="nav-item dropdown">
                <p
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
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

NavBar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default NavBar;
