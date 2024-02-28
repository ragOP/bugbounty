import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await axios.post(`${baseUrl}/user/login`, {
        email,
        password,
      });
      const accessToken = user.data.sessionId;
      localStorage.setItem("accessToken", accessToken);
      navigateTo("/");
    } catch (error) {
      console.log("Error occurred during registration:", error);
    }
  };
  return (
    <>
      <NavBar />
      <div className="container my-4">
        <h3 className="text-center">Login Page</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="12345678"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-success w-100">Login</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
