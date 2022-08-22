import React, { useEffect, useState } from "react";
import "./prodList.scss";
import ProdItem from "./ProdItem";
import PropTypes from "prop-types";
const ProdList = (props) => {
  const { infoData, currentPage } = props;
  const [prodData, setProdData] = useState([]);
  const [perProd] = useState(6); //每頁顯示幾筆
  useEffect(() => {
    const pageData = infoData.slice(
      currentPage * perProd - perProd,
      currentPage * perProd
    );
    setProdData(pageData);
  }, [infoData, currentPage, perProd]);
  return (
    <div className="c-themeRec__prodList">
      {prodData.map((objData) => (
        <ProdItem key={objData.Id} {...objData} />
      ))}
    </div>
  );
};
ProdList.prototype = {
  infoData: PropTypes.shape({
    Id: PropTypes.number,
  }),
  currentPage: PropTypes.number,
};
ProdList.defaultProps = {
  infoData: {
    Id: null,
  },
  currentPage: undefined,
};
export default ProdList;
