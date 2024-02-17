import Badegs from "../common/Badegs";
import Cards from "../common/Cards";
import NavBar from "../layout/NavBar";
import Pagination from "../common/Pagination";
import Footer from "../layout/Footer";
import getUserFromJwt from "../../helper/getAccessToken";
import { useEffect, useState } from "react";

function HomePage() {
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
        <div className="d-flex align-items-center justify-content-center h-100 my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <div>
      <NavBar user={user} />
      <Badegs />
      <Cards />
      <Pagination />
      <Footer />
    </div>
  );
}

export default HomePage;
