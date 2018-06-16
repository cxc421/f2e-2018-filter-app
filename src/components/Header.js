import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/Header.scss';
import LOGO_URL from 'images/logo.svg';
import { appContext } from 'app_context';

class Header extends React.PureComponent {

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
    const { search, updateFilter} = this.props;

    return (
      <header className={ headerClassName }>
        <div className="container">
          <Link to="/" className="logo">
            <img src={LOGO_URL} alt="logo" />
          </Link>
          <form className="searchbar" onSubmit={this.handleSearchboxSubmit}>
            <i className="fa fa-search"></i>            
            <input type="text" placeholder="搜尋地點 ..." 
              value={search}
              onChange={e => updateFilter('search', e.target.value)}
            />
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

export default (props) => (
  <appContext.Consumer>
    {
      appState => 
        <Header 
          {...props}
          {...appState}
        />
    }
  </appContext.Consumer>
);