import React from "react";
import "./tab.scss";

const Tab = ({ themeData }) => {
  return (
    <ul className="c-themeRec__toolBarList">
      {themeData?.map((obj) => (
        <li key={obj.Id}>
          <button type="button" className="c-themeRec__toolBarBtn">
            我是按鈕
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tab;
