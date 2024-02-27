import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import getUserFromJwt from "../../helper/getAccessToken";
import LoadingBar from "react-top-loading-bar";

function ContactPage() {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(0);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setProgress(50);
        const userData = await getUserFromJwt(accessToken);
        setUser(userData);
        setProgress(100);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (accessToken) fetchUser();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [accessToken]);

  return (
    <>
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <NavBar user={user} />
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
