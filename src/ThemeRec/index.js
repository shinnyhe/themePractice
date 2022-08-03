import React, { useState, useEffect } from "react";
import Tag from "../Component/Tag";
import Pagination from "../Component/Pagination";
import ProdItem from "../Component/ProdList/ProdItem";
import Data from "../Feature/data";

import "./themeRec.scss";
const ThemeRec = () => {
  const [data, setData] = useState([]);
  const [perProd] = useState(6); //每頁顯示幾筆
  const pageNumberLimit = 6;
  const [pageCount, setPageCount] = useState(1);
  const [maxPageLimit, setMaxPageLimit] = useState(6);
  const [minPageLimit, setMinPageLimit] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const renderTypeUrl = (type) => {
    switch (type) {
      case "Store":
        return "https://24h.pchome.com.tw/store/";
      case "Prod":
        return "https://24h.pchome.com.tw/prod/";
      case "Search":
        return "https://ecshweb.pchome.com.tw/search/v3.3/?q=";
      default:
        return "";
    }
  };
  const splitArrayIntoChunksOfLen = (arr, len) => {
    let chunks = [];
    let i = 0;
    let n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
  };

  const getData = () => {
    const slice = Data.slice(6, 24);
    const data = slice;
    const prodItem = () =>
      slice.map((objData) => <ProdItem key="objData.id" {...objData} />);
    const chunks = splitArrayIntoChunksOfLen(prodItem(), 6);

    setData(chunks[0]);
    setPageCount(Math.ceil(data.length / perProd));
  };
  useEffect(() => {
    getData();
  }, []);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const onPrevClick = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setCurrentPage((prev) => prev - 1);
  };

  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <div className="c-themeRec">
      <div className="c-themeRec__adInfo">
        {/* 背景編輯器更換 start */}
        <div
          className="c-themeRec__bgEdit"
          style={{ backgroundColor: Data[0].Link.Background }}
        />
        {/* 背景編輯器更換 end */}
        <div className="c-themeRec__colorTag">
          <div className="c-themeRec__colorTagWrapper">
            <i className="c-themeRec__colorTagIcon">
              <h3 className="c-themeRec__colorTagText">主題推薦</h3>
            </i>
          </div>
        </div>
        <h3 className="c-themeRec__adTitle">{Data[0].Link.Text}</h3>
        <div className="c-themeRec__infoEdit">
          <Tag keywordData={Data.slice(1, 6)} />
          <div className="c-themeRec__banner">
            <img src={Data[0].Img.Src} alt="" />
          </div>
        </div>
      </div>
      <div className="c-themeRec__prodInfo">
        <div className="c-themeRec__prodList">{data}</div>
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default ThemeRec;
