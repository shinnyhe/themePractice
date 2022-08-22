import React, { useState, useEffect } from "react";
import Tag from "../Component/Tag";
import axios from "axios";
import Tab from "../Component/Tab";
import Pagination from "../Component/Pagination";
import ProdList from "../Component/ProdList/ProdList";
import "./themeRec.scss";

const ThemeRec = () => {
  const [data, setData] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState([]);
  const [selectedThemeId, setSelectedThemeId] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = selectedTheme.slice(6, 24).length / 6;
  useEffect(() => {
    axios
      .get("/index/stage/v1/data&27655702")
      .then((res) => {
        setSelectedTheme(res.data.window.Blocks[0].Nodes);
        setData(res.data.window.Blocks);
      })
      .catch((error) => console.log(error));
  }, []);
  const onHandleToolBarClick = (themeData, themeId) => {
    setSelectedTheme(themeData?.Nodes);
    setSelectedThemeId(themeId);
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
        <ProdList
          infoData={selectedTheme.slice(6, 24)}
          currentPage={currentPage}
        />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
        />
      </div>
      <div className="c-themeRec__toolBar">
        <Tab
          themeData={data}
          selectedThemeId={selectedThemeId}
          onHandleToolBarClick={onHandleToolBarClick}
        />
      </div>
    </div>
  );
};

export default ThemeRec;
