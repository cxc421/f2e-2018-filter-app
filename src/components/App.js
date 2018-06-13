import React from 'react';
import 'font-awesome/scss/font-awesome.scss';
import 'styles/App.scss';

import Header from 'components/Header';
import Layout from 'components/Layout';
import FilterList from 'components/FilterList';
import ContentList from 'components/ContentList';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Layout 
        LeftComponent={FilterList}
        RightComponent={ContentList}
        hideLeftComponentWhenMobile={false}
      />
    </div>
  );
};

export default App;