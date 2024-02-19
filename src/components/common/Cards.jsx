import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import formatDate from "../../helper/parseDate";
import getAuthor from "../../helper/getspecificUser";

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
  const [specificUser, setSpecificUser] = useState("");

  useEffect(() => {
    const fetchSpecificUser = async () => {
      if (author) {
        const authorData = await getAuthor(author);
        setSpecificUser(authorData);
      }
    };
    fetchSpecificUser();
  }, [author]);

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
        <span className="badge bg-primary my-2">{readTime} min</span>
        <span className="badge bg-success my-2 w-100">
          Created By - {specificUser} on {formatDate(createdAt)}
        </span>
        <Link to={`/blog/${_id}`} className="btn btn-primary btn-sm w-100">
          Read Full Blog
        </Link>
      </div>
    </div>
  );
}

export default Cards;
