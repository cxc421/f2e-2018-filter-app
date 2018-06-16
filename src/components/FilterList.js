import React from 'react';
import FilterCard from 'components/FilterCard';
import { appContext } from 'app_context';

const areaList = [
  "全部",
  "楠梓區",
  "左營區",
  "鼓山區",
  "三民區",
  "鹽埕區",
  "前金區",
  "新興區",
  "苓雅區",
  "前鎮區",
  "旗津區",
  "小港區",
  "鳳山區",
  "大寮區",
  "鳥松區",
  "林園區",
  "仁武區",
  "大樹區",
  "大社區",
  "岡山區",
  "路竹區",
  "橋頭區",
  "梓官區",
  "彌陀區",
  "永安區",
  "燕巢區",
  "田寮區",
  "阿蓮區",
  "茄萣區",
  "湖內區",
  "旗山區",
  "美濃區",
  "內門區",
  "杉林區",
  "甲仙區",
  "六龜區",
  "茂林區",
  "桃源區",
  "那瑪夏區",
  "東沙群島",
  "南沙群島"
];

class FilterList extends React.PureComponent {

  onLocationChange = (e) => {
    this.props.updateFilter('location', e.target.value);
  }

  onFreeChange = (e) => {
    this.props.updateFilter('free', e.target.checked); 
  }

  onOpen24Change = (e) => {
    this.props.updateFilter('open24', e.target.checked);
  }

  render() {
    const { location, free, open24 } = this.props;

    return (
      <div>
        <FilterCard title="地區" open={false}>
          <div>
            <select 
              value={location} 
              onChange={this.onLocationChange}
            >
              {
                areaList.map(v => <option key={v} value={v}>{v}</option>)
              }
            </select>
          </div>
        </FilterCard>
        <FilterCard title="標籤">
          <div className="small">
            <input type="checkbox" id="cbx-ticket-free" 
              checked={free}
              onChange={this.onFreeChange}
            />
            <label htmlFor="cbx-ticket-free">免費參觀</label>
          </div>
          <div className="small">
            <input type="checkbox" id="cbx-open-24hr" 
              checked={open24}
              onChange={this.onOpen24Change}
            />
            <label htmlFor="cbx-open-24hr">全天候開放</label>
          </div>
        </FilterCard>
      </div>
    );
  }
}

export default props => (
  <appContext.Consumer>
  {
    (appState) => 
    <FilterList 
      {...props}
      {...appState}
    />
  }
  </appContext.Consumer>
);