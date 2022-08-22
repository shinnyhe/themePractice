import React from "react";
import "./prodList.scss";
import PropTypes from "prop-types";
const ProdItem = (props) => {
  const { Link, Img } = props;
  return (
    <div className="c-prodList__prodInfo">
      <a href={Link.Url} className="c-prodList__link">
        <div className="c-prodList__flex">
          <div className="c-prodList__head">
            <div className="c-prodList__img">
              <img src={`https://cs-a.ecimg.tw${Img.Src}`} alt={Link.Text} />
            </div>
          </div>
          <div className="c-prodList__itemBody">
            <div className="c-prodList__itemTitle">{Link.Text}</div>
            <div className="c-prodList__itemPrice">${Number(Link.Text1)}</div>
          </div>
        </div>
      </a>
    </div>
  );
};
ProdItem.prototype = {
  Link: PropTypes.shape({
    Text: PropTypes.string,
    Text1: PropTypes.string,
    Url: PropTypes.string,
  }),
  Img: PropTypes.shape({
    Src: PropTypes.string,
  }),
};
ProdItem.defaultProps = {
  Link: {
    Text: undefined,
    Text1: undefined,
    Url: undefined,
  },
  Img: {
    Src: undefined,
  },
};
export default ProdItem;
