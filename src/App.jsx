import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import ProfilePage from "./components/pages/ProfilePage";
import BlogPage from "./components/common/BlogPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import AddNewBlog from "./components/pages/AddNewBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/user/profile" element={<ProfilePage />} />
        <Route path="/user/blogs" element={<BlogPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user/register" element={<RegisterPage />} />
        <Route path="/postblog" element={<AddNewBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
