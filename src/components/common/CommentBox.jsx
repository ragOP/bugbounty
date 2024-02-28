import axios from "axios";
import { useEffect, useState } from "react";

function CommentBox({ user, id }) {
  const [data, setData] = useState({
    comment: "",
    user: "",
  });

  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setData({
        user: user,
      });
    }
  }, [user]);

  const handleCreateComment = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/comment/${id}`, data);
      navigateTo(`/blog${id}`);
    } catch (error) {
      console.error("Error Disliking Blog:", error);
    }
  };
  return (
    <div className="d-flex align-itmes-center justify-content-center flex-column mb-3">
      <form onSubmit={handleCreateComment}>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            value={data.comment}
            onChange={(e) => setData({ ...data, comment: e.target.value })}
          ></textarea>
        </div>
        <button className="btn btn-success w-100">Comment</button>
      </form>
    </div>
  );
}

export default CommentBox;
