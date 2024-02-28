import { useEffect, useState } from "react";
import getAuthor from "../../helper/getspecificUser";

function Comments({ comment, user }) {
  const [specificUser, setSpecificUser] = useState({});

  const localUrl = import.meta.env.VITE_BACKEND_BASE_URL;

  useEffect(() => {
    const fetchSpecificUser = async () => {
      if (user) {
        const authorData = await getAuthor(user);
        setSpecificUser(authorData);
      }
    };
    fetchSpecificUser();
  }, [user]);

  return (
    <div className="mt-2">
      <div className="d-flex align-items-left" key={comment._id}>
        <img
          className="me-3"
          src={`${localUrl}/${specificUser.profilePicture}`}
          alt="profile-picture"
          style={{ height: "25px", width: "25px", borderRadius: "50%" }}
        />
        <p>
          <b className="me-2">
            {specificUser.username}
            {" - "}
          </b>
        </p>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default Comments;
