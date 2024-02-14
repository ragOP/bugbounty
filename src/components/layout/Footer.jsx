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
                <a href="#" className="text-dark text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-dark text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark ">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-dark ">
                  <i className="bi bi-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-dark ">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-dark ">
                  <i className="bi bi-linkedin"></i> LinkedIn
                </a>
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
