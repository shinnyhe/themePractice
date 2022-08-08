import React from "react";
import "./prodList.scss";
import ProdItem from "./ProdList/ProdItem";

const ProdList = (props) => {
  const { newData } = props;
  return (
    <div className="c-themeRec__prodList">
      {newData.map((objData) => (
        <ProdItem key={objData.Id} {...objData} />
      ))}
    </div>
  );
};

export default ProdList;
