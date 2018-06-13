import React, { Component } from 'react';
import 'styles/Header.scss';
import LOGO_URL from 'images/logo.svg';

class Header extends Component {

  state = {
    hideSearchBar: true
  };

  toggleSearchbar = () => {
    this.setState(prevState => ({
      hideSearchBar: !prevState.hideSearchBar
    }));
  };

  handleSearchboxSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const headerClassName = this.state.hideSearchBar ? "hide-searchbar" : "";

    return (
      <header className={ headerClassName }>
        <div className="container">
          <a href="/" className="logo">
            <img src={LOGO_URL} alt="logo" />
          </a>
          <form className="searchbar" onSubmit={this.handleSearchboxSubmit}>
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Explore your own activities" />
          </form>
          <i 
            className="fa fa-search searchbar-toggle"
            onClick={this.toggleSearchbar}
          >
          </i>
        </div>
      </header>
    );
  }
}

export default Header;