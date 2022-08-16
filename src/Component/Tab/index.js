import React from "react";
import "./tab.scss";

const Tab = ({ themeData, selectedThemeId, onHandleToolBarClick }) => {
  const handleToolBarClick = (themeData, themeId) => {
    onHandleToolBarClick(themeData, themeId);
  };
  return (
    <ul className="c-themeRec__toolBarList">
      {themeData?.map((item) => (
        <li
          onClick={() => handleToolBarClick(item, item?.BlockId)}
          key={item?.BlockId}
        >
          <button
            type="button"
            className={`c-themeRec__toolBarBtn ${
              item?.BlockId === selectedThemeId ? "is-active" : ""
            }`}
          >
            {item?.Nodes[0]?.Link?.Text}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tab;
