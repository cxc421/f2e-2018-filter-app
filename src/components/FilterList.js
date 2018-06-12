import React from 'react';
import FilterCard from 'components/FilterCard';

const FilterList = (props) => {
  return (
    <div>
      <FilterCard title="Location" open={true}>
        <div>
          <select>
            <option value="taiwan">Taiwan</option>
            <option value="china">China</option>
            <option value="america">America</option>
          </select>        
        </div>
      </FilterCard>
      <FilterCard title="Date">
        <div>
          <span>from</span>
          <input type="date" value="2018-05-24"/>
        </div>
        <div>
          <span>to</span>
          <input type="date" value="2018-06-01" />
        </div>
      </FilterCard>
      <FilterCard title="Categories">
        <div className="small">
          <input type="checkbox" id="cbx-category-all"/>
          <label htmlFor="cbx-category-all">All</label>
        </div>
        <div className="small">
          <input type="checkbox" id="cbx-category-entertainment"/>
          <label htmlFor="cbx-category-entertainment">Entertainment</label>
        </div>
        <div className="small">
          <input type="checkbox" id="cbx-category-food"/>
          <label htmlFor="cbx-category-food">Food</label>
        </div>
        <div className="small">
          <input type="checkbox" id="cbx-category-learning"/>
          <label htmlFor="cbx-category-learning">Learning</label>
        </div>
        <div className="small">
          <input type="checkbox" id="cbx-category-outdoors"/>
          <label htmlFor="cbx-category-outdoors">Outdoors</label>
        </div>
      </FilterCard>
    </div>
  );
};

export default FilterList;