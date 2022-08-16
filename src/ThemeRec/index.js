import React, { useState, useEffect } from "react";
import Tag from "../Component/Tag";
import Tab from "../Component/Tab";
import Pagination from "../Component/Pagination";
import ProdItem from "../Component/ProdList/ProdItem";
import "./themeRec.scss";
const ThemeRec = ({ data, themeData }) => {
  const [newData, setNewData] = useState([]);
  const [perProd] = useState(6); //每頁顯示幾筆
  const [selectedTheme, setSelectedTheme] = useState([]);
  const [selectedThemeId, setSelectedThemeId] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const sliceProdData = selectedTheme.slice(6, 24);
  const totalPage = sliceProdData.length / 6;
  useEffect(() => {
    const pageData = sliceProdData.slice(
      currentPage * perProd - perProd,
      currentPage * perProd
    );
    const newProdData = pageData.map((item) => {
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

    setNewData(newProdData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, totalPage, selectedThemeId]);
  const onHandleToolBarClick = (themeData, themeId) => {
    setSelectedTheme(themeData?.Nodes);
    setSelectedThemeId(themeId);
  };
  const onPrevClick = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };

  const onNextClick = () => {
    if (currentPage === totalPage) {
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
          style={{ backgroundColor: selectedTheme[0]?.Link?.Background }}
        />
        {/* 背景編輯器更換 end */}
        <div className="c-themeRec__colorTag">
          <div className="c-themeRec__colorTagWrapper">
            <i className="c-themeRec__colorTagIcon">
              <h3 className="c-themeRec__colorTagText">主題推薦</h3>
            </i>
          </div>
        </div>
        <h3 className="c-themeRec__adTitle">{selectedTheme[0]?.Link?.Text2}</h3>
        <div className="c-themeRec__infoEdit">
          <Tag keywordData={selectedTheme.slice(2, 6)} />
          <div className="c-themeRec__banner">
            <img
              src={`https://fs-a.ecimg.tw${selectedTheme[0]?.Img?.Src}`}
              alt=""
            />
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
          totalPage={totalPage}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
        />
      </div>
      <div className="c-themeRec__toolBar">
        <Tab
          themeData={themeData}
          selectedThemeId={selectedThemeId}
          onHandleToolBarClick={onHandleToolBarClick}
        />
      </div>
    </div>
  );
};

export default ThemeRec;
