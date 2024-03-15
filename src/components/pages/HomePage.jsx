import  { useState, useEffect } from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';
import Cards from '../common/Cards';
import NavBar from "../layout/NavBar";
import  Badges  from '../common/Cards';
import Footer from "../layout/Footer";
import getUserFromJwt from "../../helper/getAccessToken";

function HomePage() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const accessToken = localStorage.getItem('accessToken');
  const baseUrl = "https://quill-quest-server.onrender.com"


  const handlePrevPagination = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPagination = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        if (accessToken) {
          const userData = await getUserFromJwt(accessToken);
          setUser(userData);
        }
        setProgress(20);
        const pageSizeResult = await axios.get(`${baseUrl}/blog/pages`);
        const totalPages = Math.ceil(pageSizeResult.data / 6);
        setTotalPage(totalPages);
        setProgress(50);

        const response = await axios.get(`${baseUrl}/blog?page=${page}`);
        setBlogs(response.data);
        setProgress(100);
      } catch (error) {
        setError('An error occurred while fetching data. Please try again later.');
        console.error('Error occurred during fetching data:', error);
      }
    };
    fetchData();
    handleScrollToTop();
  }, [accessToken, page, baseUrl]);

  return (
    <div>
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <NavBar user={user} />
      {user && blogs.length ? <Badges /> : ''}
      {error ? (
        <div className="container d-flex align-items-center justify-content-center flex-column" style={{ height: '50vh' }}>
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
      ) : blogs.length > 0 ? (
        <div className="d-flex align-items-center justify-content-center flex-wrap">
          {blogs.map((blog) => (
            <Cards
              key={blog._id}
              bannerImage={blog.bannerImage}
              _id={blog._id}
              title={blog.title}
              content={blog.content}
              category={blog.category}
              totalViews={blog.totalViews}
              readTime={blog.readTime}
              createdAt={blog.createdAt}
              author={blog.author}
            />
          ))}
        </div>
      ) : (
        <div className="container d-flex align-items-center justify-content-center flex-column" style={{ height: '50vh' }}>
          <div className="alert alert-primary" role="alert">
            No Blogs Available, Write Blogs!
          </div>
          {user ? (
            <Link to="/postblog" className="btn btn-primary btn-sm">
              Go To Post Blog
            </Link>
          ) : (
            <div className="d-flex align-items-center justify-content-center">
              <Link to="/user/login" className="btn btn-primary btn-sm me-3">
                Login
              </Link>
              <Link to="/user/register" className="btn btn-primary btn-sm">
                Register
              </Link>
            </div>
          )}
        </div>
      )}
      {blogs.length > 0 ? (
        <div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className={page > 1 ? 'page-item' : 'page-item disabled'}>
                <button className="page-link" onClick={handlePrevPagination} disabled={page <= 1}>
                  Previous
                </button>
              </li>
              <li className={page < totalPage ? 'page-item' : 'page-item disabled'}>
                <button className="page-link" onClick={handleNextPagination} disabled={page >= totalPage}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      ) : ''}
      <Footer />
    </div>
  );
}

export default HomePage;
