import React from 'react';
import 'font-awesome/scss/font-awesome.scss';
import 'styles/App.scss';

import Header from 'components/Header';
import Layout from 'components/Layout';
import FilterList from 'components/FilterList';
import ContentList from 'components/ContentList';
import Article from 'components/Article';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Layout 
        LeftComponent={FilterList}
        RightComponent={Article}
        hideLeftComponentWhenMobile={true}
      />
    </div>
  );
};

export default App;