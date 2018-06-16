import React from 'react';
import 'styles/FilterTag.scss';

const FilterTag = ({ children, deleteFunc }) => {
  return (
    <div className="filter-tag" onClick={deleteFunc}>
      { children }
      <i className="fa fa-times-circle-o"></i>
    </div>
  );
};

export default FilterTag;