import React from "react";
import "./pagination.scss";

const Pagination = ({
  onPrevClick,
  pageCount,
  onNextClick,
  onPageChange,
  currentPage,
}) => {
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
          className="btn btn--circular is-disabled"
          type="button"
          onClick={handlePrevClick}
        >
          <i className="o-icon o-icon__arrow--prev" />
        </button>
      </li>
      <li className="c-pagination__item is-active">{currentPage}</li>
      <li className="c-pagination__item">/</li>
      <li className="c-pagination__item is-total">{pageCount}</li>
      <li className="c-pagination__item is-next">
        <button
          className="btn btn--circular"
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
