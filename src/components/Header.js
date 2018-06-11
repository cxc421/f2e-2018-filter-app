import React from 'react';
import 'styles/Header.scss';
import LOGO_URL from 'images/logo.svg';

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        <img src={LOGO_URL} alt="logo"/>
      </a>
      <form className="search-box">
        <i className="fa fa-search"></i>
        <input type="text" placeholder="Explore your own activities" />
      </form>
    </header>
  );
};

export default Header;