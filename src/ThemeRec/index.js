import React,{useState,useEffect} from "react";
import Tag from "../Component/Tag";
import ProdList from "../Component/ProdList";
import Pagination from "../Component/Pagination";
import Data from '../Feature/data';

import "./themeRec.scss";
const ThemeRec = () => {
  const [prodData, setProdData] = useState([]);
  const splitArrayIntoChunksOfLen= (arr, len) => {
    let chunks = []
    let i = 0
    let n = arr.length
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    return chunks;
  }
  useEffect(()=>{
    const newProdData = Data.slice(6, 24).map((item) => {
			switch (item.ExtraData.ElementType) {
				case 'Search':
					item.Link.Url = `https://ecshweb.pchome.com.tw/search/v3.3/?q=${item.Link.Url}`;
					break;
				case 'Store':
					item.Link.Url = `https://24h.pchome.com.tw/store/${item.Link.Url}`;
					break;
				case 'Prod':
					item.Link.Url = `https://24h.pchome.com.tw/prod/${item.Link.Url}`;
					break;
				default:
					break;
			}
			return item;
		})
    const chunks = splitArrayIntoChunksOfLen(newProdData,6);
		setProdData(chunks[0],chunks[1],chunks[2])
  },[])


  return (
    <div className="c-themeRec">
      <div className="c-themeRec__adInfo">
        {/* 背景編輯器更換 start */}
        <div className="c-themeRec__bgEdit" style={{backgroundColor: Data[0].Link.Background}} />
        {/* 背景編輯器更換 end */}
        <div className="c-themeRec__colorTag">
          <div className="c-themeRec__colorTagWrapper">
            <i className="c-themeRec__colorTagIcon">
              <h3 className="c-themeRec__colorTagText">主題推薦</h3>
            </i>
          </div>
        </div>
        <h3 className="c-themeRec__adTitle" >{Data[0].Link.Text}</h3>
        <div className="c-themeRec__infoEdit">
          <Tag keywordData={Data.slice(1,6)}/>
          <div className="c-themeRec__banner">
            <img src={Data[0].Img.Src} alt='' />
          </div>
        </div>
      </div>
      <div className="c-themeRec__prodInfo">
        <ProdList prodData={prodData} />
        <Pagination item={(Data.slice(6, 24).length)/6} />
      </div>
    </div>
  );
};

export default ThemeRec;
