import React from "react";
import "./prodList.scss";
import PropTypes from "prop-types";
const ProdItem = (props) => {
  const { Link, Img, ExtraData } = props;
  const getUrl = (type, url) => {
    switch (type) {
      case "Search":
        return `https://ecshweb.pchome.com.tw/search/v3.3/?q=${url}`;
      case "Store":
        return `https://24h.pchome.com.tw/store/${url}`;
      case "Prod":
        return `https://24h.pchome.com.tw/prod/${url}`;
      case "Url":
        return url;
      default:
        break;
    }
  };

  return (
    <div className="c-prodList__prodInfo">
      <a
        href={getUrl(ExtraData.ElementType, Link.Url)}
        className="c-prodList__link"
      >
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
  ExtraData: PropTypes.shape({
    ExtraData: PropTypes.string,
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
  ExtraData: {
    ExtraData: undefined,
  },
};
export default ProdItem;
