import React from 'react';
import 'font-awesome/scss/font-awesome.scss';
import 'styles/App.scss';
import axios from 'axios';
import { HashRouter, Route } from 'react-router-dom';

import Header from 'components/Header';
import MainPage from 'components/MainPage';
import ArticlePage from 'components/ArticlePage';
import Loading from 'components/Loading';
import { appContext } from 'app_context';

const API_URL = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&limit=300';


class App extends React.PureComponent {
  state = {
    data: null,
    location: "全部",
    free: false,
    open24: false,
    search: "",
    dataNumberPerPage: 6,
    currentPage: 1
  };

  updateFilter = (type, value) => {
    this.setState({
      [type]: value,
      currentPage: type !== 'currentPage' 
        ? 1 
        : value
    });  
    
    window.scroll(0, -window.pageYOffset);
  }

  getFilterData() {
    const {data, location, free, open24, search} = this.state;
    
    const newSearch = search.replace(/[\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]/g, '');

    const locationCheck = (obj, location) => 
      (location === "全部") || (location === obj.Zone);
    
    const freeCheck = (obj, free) => 
      !free || obj.Ticketinfo === "免費參觀";
    
    const open24Check = (obj, open24) =>
      !open24 || obj.Opentime === "全天候開放";
    
    const searchCheck = (obj, search) =>
      obj.Name.indexOf(search) > -1;

    return data.filter(obj => 
      locationCheck(obj, location) &&
      freeCheck(obj, free) &&
      open24Check(obj, open24) &&
      searchCheck(obj, newSearch)
    );
  }

  getAppState() {
    const { data, ...otherState } = this.state;
    return {
      ...otherState,
      filterData: this.getFilterData(),
      updateFilter: this.updateFilter
    };
  }

  render() {
    const {data} = this.state;    
    if (!data) {
      return <Loading />;
    }

    const appState = this.getAppState();
    return (
      <HashRouter>
        <appContext.Provider value={appState}>
          <Route component={Header} />
          <Route path="/" component={MainPage} exact />
          <Route path="/article/:id" component={ArticlePage} />
        </appContext.Provider>
      </HashRouter>
    );
  }

  componentDidMount() {
    axios.get(API_URL)
      .then(({data}) => {
        this.setState({data: data.result.records});
      });
  }
}

export default App;