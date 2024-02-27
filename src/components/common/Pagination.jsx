import { useState } from "react";
import { Link } from "react-router-dom";

function Pagination() {
  const [page, setPage] = useState(1);

  const handlePrevPagination = () => {
    setPage(page - 1);
  };

  const handleNextPagination = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={page > 1 ? `page-item` : `page-item disabled`}>
            <Link className="page-link" onClick={handlePrevPagination}>
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" onClick={handleNextPagination}>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
