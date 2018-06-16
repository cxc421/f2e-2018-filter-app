import React from 'react';
import 'styles/Layout.scss';
import ScrollTopButton from 'components/ScrollTopButton'; 

const EmptyComponent = () => null;

const Layout = ({LeftComponent = EmptyComponent, RightComponent = EmptyComponent, hideLeftComponentWhenMobile = false, match}) => {
  return (
    <div className="layout">
      <div className="container">
        <div className={`layout-left ${hideLeftComponentWhenMobile ? "hide-when-mobile" : ""}`}>
          <LeftComponent />
        </div>
        <div className="layout-right">
          <RightComponent match={match} />
        </div>      
      </div>
      <ScrollTopButton />
    </div>
  );
};

export default Layout;