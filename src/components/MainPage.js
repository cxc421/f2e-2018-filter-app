import React, {PureComponent} from 'react';
import Layout from 'components/Layout';
import FilterList from 'components/FilterList';
import ContentList from 'components/ContentList';

class MainPage extends PureComponent {
  render() {
    return (
      <Layout
        LeftComponent={FilterList}
        RightComponent={ContentList}
        hideLeftComponentWhenMobile={false}
      />
    );
  }
}

export default MainPage;