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
  const localUrl = import.meta.env.VITE_BACKEND_BASE_URL;

  useEffect(() => {
    const fetchSpecificUser = async () => {
      if (author) {
        const authorData = await getAuthor(author);
        setSpecificUser(authorData.username);
      }
    };
    fetchSpecificUser();
  }, [author]);

  const renderContent = () => {
    const maxLength = 240;

    if (content.length > maxLength) {
      const truncatedContent = content
        .slice(0, maxLength)
        .replace(/\s+\S*$/, "");
      return truncatedContent + " " + "...";
    }
    return content;
  };

  const renderTitle = (content) => {
    const words = content;
    if (words.length > 50) {
      const truncatedContent = words.slice(0, 50);
      return truncatedContent + "...";
    }
    return content;
  };

  return (
    <div className="card mx-3 my-4" style={{ width: "23rem" }} key={_id}>
      <img
        src={`${localUrl}/${bannerImage}`}
        className="card-img-top"
        alt="..."
        style={{ width: "100%", height: "250px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{renderTitle(title)}</h5>
        <div dangerouslySetInnerHTML={{ __html: renderContent() }} />
        <span className="badge bg-primary my-2 me-1">{category}</span>
        <span className="badge bg-primary my-2 me-1">
          Total Views - {Math.round(totalViews)}
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
