import React from 'react';
import 'styles/Pagination.scss';

const Pagination = (props) => {
  return (
    <div className="pagination">
      <div>
        <i className="fa fa-angle-double-left" aria-hidden="true"></i>
      </div>
      <div className="select">1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>
        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Pagination;