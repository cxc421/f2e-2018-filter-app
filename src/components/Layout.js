import React from 'react';
import 'styles/Layout.scss';

const EmptyComponent = () => null;

const Layout = ({LeftComponent = EmptyComponent, RightComponent = EmptyComponent, hideLeftComponentWhenMobile = false}) => {
  return (
    <div className="layout">
      <div className="container">
        <div className={`layout-left ${hideLeftComponentWhenMobile ? "hide-when-mobile" : ""}`}>
          <LeftComponent />
        </div>
        <div className="layout-right">
          <RightComponent />
        </div>      
      </div>
    </div>
  );
};

export default Layout;