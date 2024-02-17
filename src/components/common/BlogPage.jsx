import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import Cards from "./Cards";
import getUserFromJwt from "../../helper/getAccessToken";

function BlogPage() {
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

  return (
    <div>
      <NavBar user={user} />
      <Cards />
      <Footer />
    </div>
  );
}

export default BlogPage;
