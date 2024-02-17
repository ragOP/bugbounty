import { useEffect, useState } from "react";
import UpdateUserModal from "../common/UpdateUserModal";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import getUserFromJwt from "../../helper/getAccessToken";

function ProfilePage() {
  const [user, setUser] = useState(null);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserFromJwt(accessToken);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (accessToken) fetchUser();
  }, [accessToken]);

  if (!user) {
    return (
      <>
        <NavBar user={null} />
        <div
          className="d-flex align-items-center justify-content-center my-5"
          style={{ height: "100vh" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <NavBar user={user} />
      <div className="container my-4 d-flex align-items-center justify-content-center flex-column">
        <img
          src={`http://localhost:3001/${user.profilePicture}`}
          alt="user-profile"
          style={{ width: "150px", borderRadius: "50%", height: "150px" }}
        />
        <h4 className="my-2">{user.username}</h4>
        <h6 className="my-2">{user.email}</h6>
        <p className="my-2 text-center w-50">{user.description}</p>
        <UpdateUserModal user={user} />
      </div>
      <Footer />
    </>
  );
}

export default ProfilePage;
