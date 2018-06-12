import React, { Component } from 'react';
import 'styles/FilterCard.scss';

class FilterCard extends Component {
  state = {
    open: !!this.props.open
  };

  toogleFilterCard = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { title = "", children } = this.props;
    const { open } = this.state;
    const className = `filter-card ${ open ? "open" : "" }`;
    return (
      <div className={className}>
        <h2 className="title">
          {title}
          <div 
            className="toggle-icon"
            onClick={this.toogleFilterCard}
          ></div>
        </h2>
        <div className="content">
          {children}
        </div>
      </div>
    );
  }
}

export default FilterCard;