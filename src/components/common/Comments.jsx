const comments = [
  {
    _id: "614f17f51f2c4324bbcc37b8",
    name: "John Doe",
    comment:
      "This is a great article! Thanks for sharing. I really appreciate the effort you put into explaining everything in detail.",
  },
  {
    _id: "614f17f51f2c4324bbcc37b9",
    name: "Jane Smith",
    comment:
      "I found this article extremely insightful. which provided valuable real-world examples. Overall, an excellent read!",
  },
  {
    _id: "614f17f51f2c4324bbcc37ba",
    name: "Alice Johnson",
    comment:
      "Wow, what an informative piece! I learned a lot from reading this article. The content is well-structured and easy to follow, ",
  },
  {
    _id: "614f17f51f2c4324bbcc37bb",
    name: "Bob Brown",
    comment:
      "I have to say, this is one of the best articles I've come across on this subject.",
  },
];

function Comments() {
  return (
    <div className="mt-2">
      <h3 className="mb-3">Comments</h3>
      {comments.map((comment) => (
        <div className="d-flex align-items-left" key={comment._id}>
          <img
            className="me-3"
            src="http://localhost:3001/1708162875665%20-%201697085485882.jpeg"
            alt="profile-picture"
            style={{ height: "25px", width: "25px", borderRadius: "50%" }}
          />
          <p>
            <b className="me-2">
              {comment.name}
              {" - "}
            </b>
          </p>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
