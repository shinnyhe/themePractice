import React from "react";
import "./prodList.scss";
import ProdItem from "./ProdList/ProdItem";
import PropTypes from "prop-types";
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
ProdList.prototype = {
  newData: PropTypes.shape({
    Id: PropTypes.number,
    Link: PropTypes.shape({
      Text: PropTypes.string,
      Text1: PropTypes.string,
      Url: PropTypes.string,
    }),
    Img: PropTypes.shape({
      Src: PropTypes.string,
    }),
    ExtraData: PropTypes.shape({
      ElementType: PropTypes.string,
      Sort: PropTypes.number,
    }),
  }),
};
ProdList.defaultProps = {
  newData: {
    Id: null,
    Link: {
      Text: undefined,
      Text1: undefined,
      Url: undefined,
    },
    Img: {
      Src: undefined,
    },
    ExtraData: {
      ElementType: undefined,
      Sort: null,
    },
  },
};
export default ProdList;
