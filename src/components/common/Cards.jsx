import axios from "axios";
import { useState, useEffect } from "react";

function Cards({
  bannerImage,
  _id,
  title,
  content,
  category,
  totalViews,
  readTime,
  createdAt,
  author,
}) {
  const [specificUser, setSpecificUser] = useState([]);

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/user/${author}`
        );
        setSpecificUser(response.data);
      } catch (error) {
        console.error("Error occurred during fetching author:", error);
      }
    };
    if (author) {
      getAuthor();
    }
  }, [author]);

  const formatDate = (timestamp) => {
    const date = new Date(parseInt(timestamp));
    return date.toLocaleString();
  };

  return (
    <div className="card mx-3 my-4" style={{ width: "23rem" }} key={_id}>
      <img
        src={`http://localhost:3001/${bannerImage}`}
        className="card-img-top"
        alt="..."
        style={{ width: "100%", height: "300px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {" "}
          {content.split(" ").length > 50
            ? content.slice(0, 250) + "..."
            : content}
        </p>
        <span className="badge bg-primary my-2 me-1">{category}</span>
        <span className="badge bg-primary my-2 me-1">
          Total Views - {totalViews}
        </span>
        <span className="badge bg-primary my-2">{readTime}</span>
        <span className="badge bg-success my-2 w-100">
          Created By - {specificUser} on {formatDate(createdAt)}
        </span>
        <a href="#" className="btn btn-primary btn-sm w-100">
          Read Full Blog
        </a>
      </div>
    </div>
  );
}

export default Cards;
