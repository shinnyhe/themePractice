import React from "react";
import "./pagination.scss";

const Pagination = ({ onPrevClick, totalPage, onNextClick, currentPage }) => {
  const handlePrevClick = () => {
    onPrevClick();
  };
  const handleNextClick = () => {
    onNextClick();
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

export default Pagination;
