import React from 'react';
import 'font-awesome/scss/font-awesome.scss';
import 'styles/App.scss';

import Header from 'components/Header';
import Layout from 'components/Layout';
import FilterList from 'components/FilterList';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Layout 
        LeftComponent={FilterList}
      />
    </div>
  );
};

export default App;