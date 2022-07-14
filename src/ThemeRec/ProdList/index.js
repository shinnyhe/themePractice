import React from "react";
import ProdItem from "./ProdItem";
import "./prodList.scss";

const ProdList = (props) => {
  const {prodData}=props

  const renderProdItem = () => {
    return prodData.map((objData) => (
      <li className="c-prodList__item" key={objData.id} >
        <ProdItem {...objData} />
      </li>
    ));
  };

  return (
    <div className="c-prodList c-prodList--vertical">
      <div className="c-prodList__body">
        <div className="c-prodList__slider">
          <ul className="c-prodList__list">{renderProdItem()}</ul>
        </div>
      </div>
    </div>
  );
};

export default ProdList;
