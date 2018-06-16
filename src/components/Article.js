import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/Article.scss';
import { appContext } from 'app_context';

class Article extends React.PureComponent {

  render() {
    const { match, filterData } = this.props;
    const { id } = match.params;
    const target = filterData.find(obj => obj.Id === id);
    const { 
      Name, 
      Picture1,
      Zone,
      Ticketinfo,
      Opentime,
      Add,
      Tel,
      Toldescribe
    } = target;

    return (
      <div className="article">
        <div className="article-nav">
          <Link to="/">搜尋</Link>
          <span className="slash">/</span>
          <span className="title">{Name}</span>
        </div> 
        <div className="article-img">
          <img src={Picture1} alt={'圖片 -' + Name} />
        </div>
        <div className="article-body">

          <h1>{Name}</h1>

          <div className="info-area-1">
            {
            // <div className="author">
            //   {Zone}
            // </div>
            }
            {
              Ticketinfo === "免費參觀" &&
              <div className="category">
                免費參觀
              </div>
            }
            {
              Opentime === "全天候開放" &&
              <div className="category">
                全天候開放
              </div>
            }            
          </div>

          <div className="info-area-2">
            <i className="fa fa-map-marker"></i>
            <span>{Add}</span>
          </div>
          <div className="info-area-2">
            <i className="fa fa-calendar"></i>
            <span>{Opentime}</span>
          </div>
          <div className="info-area-2">
            <i className="fa fa-ticket"></i>
            <span>{Ticketinfo.length < 2 ? "無票價資訊" : Ticketinfo}</span>
          </div>          
          <div className="info-area-2">
            <i className="fa fa-phone"></i>
            <span>{Tel}</span>
          </div>

          <p>{Toldescribe}</p>

        </div>
      </div>
    );
  }

  componentDidMount() {
    window.scroll(0, -window.pageYOffset);
  }

}

export default (props) => 
  <appContext.Consumer>
    {
      appState =>
        <Article 
          {...props}
          {...appState}
        />
    }
  </appContext.Consumer>