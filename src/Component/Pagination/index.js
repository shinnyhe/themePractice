import React from "react";
import "./pagination.scss";
import PropTypes from "prop-types";
const Pagination = ({ totalPage, currentPage, setCurrentPage }) => {
  const handlePrevClick = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextClick = () => {
    if (currentPage === totalPage) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <ul className="c-pagination">
      <li className="c-pagination__item is-prev">
        <button
          className={
            currentPage === 1
              ? "btn btn--circular is-disabled"
              : "btn btn--circular"
          }
          type="button"
          onClick={handlePrevClick}
        >
          <i className="o-icon o-icon__arrow--prev" />
        </button>
      </li>
      <li className="c-pagination__item is-active">{currentPage}</li>
      <li className="c-pagination__item">/</li>
      <li className="c-pagination__item is-total">{totalPage}</li>
      <li className="c-pagination__item is-next">
        <button
          className={
            currentPage === totalPage
              ? "btn btn--circular is-disabled"
              : "btn btn--circular"
          }
          type="button"
          onClick={handleNextClick}
        >
          <i className="o-icon o-icon__arrow--next" />
        </button>
      </li>
    </ul>
  );
};
Pagination.prototype = {
  totalPage: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
};
Pagination.defaultProps = {
  totalPage: null,
  page: null,
  setCurrentPage: () => {},
};
export default Pagination;
