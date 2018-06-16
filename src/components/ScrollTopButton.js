import React from 'react';
import 'styles/ScrollTopButton.scss';

export default class ScrollTopButton extends React.PureComponent {

  state = {
    hide: true
  };

  intervalId = null;
  delayInMs = 12.66;
  scrollStepInPx = 70;

  render() {
    const {hide} = this.state;
    const className = `scroll-top-button ${hide ? "hide" : ""}`;

    return (
      <div className={className} onClick={this.scrollToTop}>
        <i className="fa fa-arrow-up"></i>
      </div>
    );
  }


  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.scrollStepInPx);    
  }

  scrollToTop = () => {
    this.intervalId = setInterval(this.scrollStep, this.delayInMs);        
  }

  checkVisibility = () => {
    const { hide } = this.state;

    if (window.pageYOffset > 100) {
      if (hide) {
        this.setState({hide: false});
      }
    } else {
      if (!hide) {
        this.setState({ hide: true });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkVisibility);
  }

  componentDidMount() {
    this.checkVisibility();
    window.addEventListener('scroll', this.checkVisibility);
  }
}