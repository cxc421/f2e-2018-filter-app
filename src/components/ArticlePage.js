import React from 'react';
import Layout from 'components/Layout';
import FilterList from 'components/FilterList';
import Article from 'components/Article';

class ArticlePage extends React.PureComponent {
  render() {
    return (
      <Layout
        LeftComponent={FilterList}
        RightComponent={Article}
        hideLeftComponentWhenMobile={true}
        {...this.props}
      />
    );
  }
}

export default ArticlePage;

