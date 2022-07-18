import React from "react";
import "./pagination.scss";

const Pagination = ({ item,totalCount,pageSize,siblingCount = 1,
  currentPage }) => {

  return (
    <ul className="c-pagination">
      <li className="c-pagination__item is-prev">
        <button className="btn btn--circular is-disabled" type="button">
          <i className="o-icon o-icon__arrow--prev" />
        </button>
      </li>
      <li className="c-pagination__item is-active">1</li>
      <li className="c-pagination__item">/</li>
      <li className="c-pagination__item is-total">{item}</li>
      <li className="c-pagination__item is-next">
        <button className="btn btn--circular" type="button">
          <i className="o-icon o-icon__arrow--next" />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
