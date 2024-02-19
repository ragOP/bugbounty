function CommentBox() {
  return (
    <div className="d-flex align-itmes-center justify-content-center flex-column">
      <form>
        <div className="mb-3">
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <button className="btn btn-success w-100">Comment</button>
      </form>
    </div>
  );
}

export default CommentBox;
