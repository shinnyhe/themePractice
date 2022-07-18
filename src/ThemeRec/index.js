import React,{useState,useEffect} from "react";
import Tag from "../Component/Tag";
import ProdList from "../Component/ProdList";
import Pagination from "../Component/Pagination";
import Data from '../Feature/data';

import "./themeRec.scss";
const ThemeRec = () => {
  const [sliceProdData, setSliceProdData] = useState([]);
  const keywordData = Data.slice(1,6)
  useEffect(()=>{
    const prodData = Data.slice(6, 24).map((item) => {
      console.log(item)
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
		setSliceProdData(prodData)
  },[sliceProdData])


  return (
    <div className="c-themeRec">
      <div className="c-themeRec__adInfo">
        {/* 背景編輯器更換 start */}
        <div className="c-themeRec__bgEdit" />
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
          <Tag keywordData={keywordData}/>
          <div className="c-themeRec__banner">
            <img src={Data[0].Img.Src} alt='' />
          </div>
        </div>
      </div>
      <div className="c-themeRec__prodInfo">
        <ProdList prodData={sliceProdData} />
        <Pagination item="5" />
      </div>
    </div>
  );
};

export default ThemeRec;
