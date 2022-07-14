import React from 'react';
import './tag.scss';

// keywordData: Array
const Tag = (props) => {
  const { keyword } = props;
  const renderKeyword = () => {
    return keyword.map((objData) => (
      <li>
        <a href={objData.link} className='c-tag__link'>
          <span>{`#${objData.text}`}</span>
        </a>
      </li>
    ));
  };
  return (
  <ul className='c-tag'>
    {renderKeyword()}
  </ul>
  )
};

export default Tag;
