import axios from "axios";
import { useEffect, useState } from "react";

function CommentBox({ user, id }) {
  const [data, setData] = useState({
    comment: "",
    user: "",
  });

  useEffect(() => {
    if (user) {
      setData({
        user: user,
      });
    }
  }, [user]);

  const handleCreateComment = async (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/comment/${id}`, data);
  };
  return (
    <div className="d-flex align-itmes-center justify-content-center flex-column">
      <form onSubmit={handleCreateComment}>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="5"
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
