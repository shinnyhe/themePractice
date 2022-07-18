import React from 'react';
import './tag.scss';

// keywordData: Array
const Tag = (props) => {
  const { keywordData } = props;
  const renderKeyword = () => {
    return keywordData.map((objData) => (
      <li>
        <a href={objData.Link} className='c-tag__link'>
          <span>{`#${objData.Link.Text}`}</span>
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
