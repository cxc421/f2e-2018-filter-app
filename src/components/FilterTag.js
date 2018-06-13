import React from 'react';
import 'styles/FilterTag.scss';

const FilterTag = ({children}) => {
  return (
    <div className="filter-tag">
      { children }
      <i className="fa fa-times-circle-o"></i>
    </div>
  );
};

export default FilterTag;