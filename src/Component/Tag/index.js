import React from "react";
import "./tag.scss";
import PropTypes from "prop-types";
// keywordData: Array
const Tag = (props) => {
  const { keywordData } = props;
  keywordData.map((item) => {
    if (item.ExtraData.ElementType === "Search") {
      item.Link.Url = `https://ecshweb.pchome.com.tw/search/v3.3/?q=${item.Link.Text}`;
    }
    return item;
  });

  return (
    <ul className="c-tag">
      {keywordData.map((objData) => (
        <li>
          <a href={objData.Link.Url} className="c-tag__link" key={objData.Id}>
            <span>{`#${objData.Link.Text}`}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
Tag.prototype = {
  keywordData: PropTypes.shape({
    Id: PropTypes.number,
    Link: PropTypes.shape({
      Text: PropTypes.string,
      Url: PropTypes.string,
    }),
  }),
};
Tag.defaultProps = {
  keywordData: {
    Id: null,
    Link: {
      Text: undefined,
      Url: undefined,
    },
  },
};
export default Tag;
