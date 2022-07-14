import React from "react";
import Tag from "../Component/Tag";
import ProdList from "../Component/ProdList";
import Pagination from "../Component/Pagination";
// import Data from '../Feature/data';

import "./themeRec.scss";
const ThemeRec = (props) => {
  // const{data} = props
  const {
    themeData = [
      {
        id:1,
        title: "美妝美體",
        backgroundColor: "#000",
        backgroundAlt: "Ad",
        backgroundSrc: "//fs-a.ecimg.tw/img/h24/v2/layout/index/20220708095757_62c78f2254ac0_720x1192.jpg?text=品牌週",
        prodData: [
          {
            id:1,
            imageSrc: "https://fakeimg.pl/300/",
            imageAlt: "prod",
            title: "test",
            link: "https://24h.pchome.com.tw/",
            price: "100",
            atClick: null,
          },
          {
            id:2,
            imageSrc: "https://fakeimg.pl/300/",
            imageAlt: "prod",
            title: "test",
            link: "https://24h.pchome.com.tw/",
            price: "200",
            atClick: null,
          },
          {
            id:3,
            imageSrc: "https://fakeimg.pl/300/",
            imageAlt: "prod",
            title: "test",
            link: "https://24h.pchome.com.tw/",
            price: "300",
            atClick: null,
          },
          {
            id:4,
            imageSrc: "https://fakeimg.pl/300/",
            imageAlt: "prod",
            title: "test",
            link: "https://24h.pchome.com.tw/",
            price: "400",
            atClick: null,
          },
          {
            id:5,
            imageSrc: "https://fakeimg.pl/300/",
            imageAlt: "prod",
            title: "test",
            link: "https://24h.pchome.com.tw/",
            price: "500",
            atClick: null,
          },
          {
            id:6,
            imageSrc: "https://fakeimg.pl/300/",
            imageAlt: "prod",
            title: "test",
            link: "https://24h.pchome.com.tw/",
            price: "600",
            atClick: null,
          },
        ],
        keyword: [
          {
            text: "關鍵字",
            link: "https://24h.pchome.com.tw/",
          },
          {
            text: "關鍵字",
            link: "https://24h.pchome.com.tw/",
          },
        ],
      }
    ],
  } = props;

  return (
    <div className="c-themeRec">
      <div className="c-themeRec__adInfo">
        {/* 背景編輯器更換 start */}
        <div className="c-themeRec__bgEdit" style={{backgroundColor: themeData[0].backgroundColor}} />
        {/* 背景編輯器更換 end */}
        <div className="c-themeRec__colorTag">
          <div className="c-themeRec__colorTagWrapper">
            <i className="c-themeRec__colorTagIcon">
              <h3 className="c-themeRec__colorTagText">主題推薦</h3>
            </i>
          </div>
        </div>
        <h3 className="c-themeRec__adTitle">{themeData[0].title}</h3>
        <div className="c-themeRec__infoEdit">
          <Tag keywordData={themeData[0].keyword}/>
          <div className="c-themeRec__banner">
            <img src={themeData[0].backgroundSrc} alt={themeData[0].backgroundAlt} />
          </div>
        </div>
      </div>
      <div className="c-themeRec__prodInfo">
        <ProdList prodData={themeData[0].prodData} />
        <Pagination item="5" />
      </div>
    </div>
  );
};

export default ThemeRec;
