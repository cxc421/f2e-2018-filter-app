import React from 'react';
import 'styles/Pagination.scss';
import { appContext } from 'app_context';

const MAX_DISPLAY_PAGE = 5;
const ONE_SIDE_NUM = 2;

class Pagination extends React.PureComponent {
  render() {
    const { filterData, dataNumberPerPage, currentPage, updateFilter } = this.props;

    if (filterData.length === 0) {
      return null;
    }

    const totPageNum = Math.ceil(filterData.length / dataNumberPerPage);

    // let endIdx = currentPage + ONE_SIDE_NUM;
    // if (endIdx > totPageNum) {
    //   endIdx = totPageNum;
    // }    
    // let startIdx = endIdx - MAX_DISPLAY_PAGE + 1;
    // if (startIdx < 1) {
    //   startIdx = 1;
    // }
    let startIdx = 1; 
    let endIdx = totPageNum;
    if (totPageNum > MAX_DISPLAY_PAGE) {
      if (currentPage > totPageNum - ONE_SIDE_NUM) {
        endIdx = totPageNum;
        startIdx = totPageNum - MAX_DISPLAY_PAGE + 1;
      } else if (currentPage > ONE_SIDE_NUM) {
        startIdx = currentPage - ONE_SIDE_NUM;
        endIdx = currentPage + ONE_SIDE_NUM;
      } else {
        startIdx = 1;
        endIdx = MAX_DISPLAY_PAGE;
      }
    }



    const pageList = [];
    for (let i=startIdx; i<=endIdx; i++) {
      const className = i === currentPage
        ? "select"
        : "";
      pageList.push(
        <div 
          key={i} 
          className={className}
          onClick={() => updateFilter('currentPage', i)}
        >{i}</div>
      )
    }

    const handleBtn = type => {
      let newPage = currentPage;
      if (type === '-') {
        newPage = currentPage - 1;
        if (newPage < 1) {
          newPage = 1;
        }
      } else {
        newPage = currentPage + 1;
        if (newPage > totPageNum) {
          newPage = totPageNum;
        }        
      }
      updateFilter('currentPage', newPage)
    }

    return (
      <div className="pagination">
        <div onClick={handleBtn.bind(this, '-')}>
          <i className="fa fa-angle-double-left" aria-hidden="true"></i>
        </div>
        {
          pageList
        }
        <div onClick={handleBtn.bind(this, '+')}>
          <i className="fa fa-angle-double-right" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default props => 
  <appContext.Consumer>
  {
    appState =>
      <Pagination 
        {...props}
        {...appState}
      />
  }
  </appContext.Consumer>