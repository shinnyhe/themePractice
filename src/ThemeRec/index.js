import React, { useState, useEffect } from "react";
import Tag from "../Component/Tag";
import Pagination from "../Component/Pagination";
import ProdItem from "../Component/ProdList/ProdItem";
import Data from "../Feature/data1";

import "./themeRec.scss";
const ThemeRec = () => {
  const [newData, setData] = useState([]);
  const [perProd] = useState(6); //每頁顯示幾筆
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const themeData = Data.window1.Blocks[0].Nodes.slice(0, 1);
  const keywordData = Data.window1.Blocks[0].Nodes.slice(1, 6);

  const getData = () => {
    const slice = Data.window1.Blocks[0].Nodes.slice(6, 24);
    const data = slice;
    const pageData = data.slice(
      currentPage * perProd - perProd,
      currentPage * perProd
    );

    const newProdDate = pageData.map((item) => {
      switch (item.ExtraData.ElementType) {
        case "Search":
          item.Link.Url = `https://ecshweb.pchome.com.tw/search/v3.3/?q=${item.Link.Url}`;
          break;
        case "Store":
          item.Link.Url = `https://24h.pchome.com.tw/store/${item.Link.Url}`;
          break;
        case "Prod":
          item.Link.Url = `https://24h.pchome.com.tw/prod/${item.Link.Url}`;
          break;
        default:
          break;
      }
      return item;
    });
    setData(newProdDate);
    setPageCount(Math.ceil(data.length / perProd));
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const onPrevClick = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };

  const onNextClick = () => {
    if (currentPage === pageCount) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="c-themeRec">
      <div className="c-themeRec__adInfo">
        {/* 背景編輯器更換 start */}
        <div
          className="c-themeRec__bgEdit"
          style={{ backgroundColor: themeData[0].Link.Background }}
        />
        {/* 背景編輯器更換 end */}
        <div className="c-themeRec__colorTag">
          <div className="c-themeRec__colorTagWrapper">
            <i className="c-themeRec__colorTagIcon">
              <h3 className="c-themeRec__colorTagText">主題推薦</h3>
            </i>
          </div>
        </div>
        <h3 className="c-themeRec__adTitle">{themeData[0].Link.Text2}</h3>
        <div className="c-themeRec__infoEdit">
          <Tag keywordData={keywordData} />
          <div className="c-themeRec__banner">
            <img src={`https://cs-a.ecimg.tw${themeData[0].Img.Src}`} alt="" />
          </div>
        </div>
      </div>
      <div className="c-themeRec__prodInfo">
        <div className="c-themeRec__prodList">
          {newData.map((objData) => (
            <ProdItem key={objData.Id} {...objData} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
        />
      </div>
    </div>
  );
};

export default ThemeRec;
