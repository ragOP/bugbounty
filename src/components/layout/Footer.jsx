import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light text-dark py-4 shadow-lg p-3 mt-5 bg-white rounded">
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-4">
            <h5>About Quill Quest</h5>
            <p>
              A tech-focused blog platform where you can find the latest
              updates, tutorials, and insights in the world of technology.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-dark text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-dark text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="text-dark text-decoration-none">
                  All Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-dark text-decoration-none">
                  <i className="bi bi-facebook"></i> Facebook
                </Link>
              </li>
              <li>
                <Link to="#" className="text-dark text-decoration-none">
                  <i className="bi bi-twitter"></i> Twitter
                </Link>
              </li>
              <li>
                <Link to="#" className="text-dark text-decoration-none">
                  <i className="bi bi-instagram"></i> Instagram
                </Link>
              </li>
              <li>
                <Link to="#" className="text-dark text-decoration-none">
                  <i className="bi bi-linkedin"></i> LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center">
          <p>&copy; 2024 Quill Quest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
