import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";

function ContactPage() {
  return (
    <>
      <NavBar />
      <div className="container my-4">
        <h3 className="text-center my-2">Contact Us</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Let Us Know</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>
          <button className="btn btn-success w-100">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
