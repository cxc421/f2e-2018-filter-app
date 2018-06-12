import React, { Component } from 'react';
import 'styles/Header.scss';
import LOGO_URL from 'images/logo.svg';

class Header extends Component {

  handleSearchboxSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <header>
        <div className="container">
          <a href="/" className="logo">
            <img src={LOGO_URL} alt="logo" />
          </a>
          <form className="search-box" onSubmit={this.handleSearchboxSubmit}>
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Explore your own activities" />
          </form>
        </div>
      </header>
    );
  }
}

export default Header;