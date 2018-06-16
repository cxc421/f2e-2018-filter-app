import React from 'react';
import 'styles/ContentList.scss';
import FilterTag from 'components/FilterTag';
import ContentCard from 'components/ContentCard';
import Pagination from 'components/Pagination';
import { appContext } from 'app_context';

class ContentList extends React.PureComponent {
  render() {
    const { filterData, free, open24, updateFilter, dataNumberPerPage, currentPage } = this.props;

    const startDataIdx = (currentPage - 1) * dataNumberPerPage;
    const endDataIdx = startDataIdx + dataNumberPerPage;

    return (
      <div className="content-list">
        <p className="list-num-text">找到 <em>{filterData.length}</em> 個符合的地點...</p>
        <div className="filter-tags-area">
          { free && 
            <FilterTag
             deleteFunc={() => updateFilter('free', false)}
            >
              免費參觀
            </FilterTag>
          }
          { open24 && 
            <FilterTag
            deleteFunc={() => updateFilter('open24', false)}
            >
              全天候開放
            </FilterTag>
          }
        </div>
        {
          filterData.slice(startDataIdx, endDataIdx).map(obj =>
            <ContentCard key={obj.Id} {...obj} />
          )
        }
        <div className="pagination-area">
          <Pagination />
        </div>
      </div>
    );    
  }
}

export default (props) => (
  <appContext.Consumer>
    {
      appState => 
        <ContentList 
          {...props}
          {...appState}
        />
    }
  </appContext.Consumer>
);