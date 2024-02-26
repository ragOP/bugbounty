function Comments({ comment, user }) {
  return (
    <div className="mt-2">
      <div className="d-flex align-items-left" key={comment._id}>
        <img
          className="me-3"
          src="http://localhost:3001/1708162875665%20-%201697085485882.jpeg"
          alt="profile-picture"
          style={{ height: "25px", width: "25px", borderRadius: "50%" }}
        />
        <p>
          <b className="me-2">
            {user}
            {" - "}
          </b>
        </p>
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default Comments;
