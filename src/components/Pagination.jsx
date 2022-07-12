import React from "react";
import "../assets/styles/Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  /** */
  const pageNumbers = [];

  /** */
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // console.log(postsPerPage);
  // console.log(totalPosts);

  return (
    <nav className="container__pagination">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page__item">
            <a onClick={() => paginate(number)} href="#" className="page__link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
