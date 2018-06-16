import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/ContentCard.scss';

const ContentCard = ({ Picture1, Name, Description, Ticketinfo, Opentime, Zone, Id}) => {

  const handleClick = () => {
    console.log('click');    
  };

  const subDescription = Array.prototype.slice.call(Description, 0, 60).join('') + "...";
  // console.log(subDescription);

  return (
    <Link to={`/article/${Id}`} className="content-card" onClick={handleClick}>
      <div
        className="content-img"
        style={{
          backgroundImage: `url(${Picture1})`
        }}
      >
      </div>
      <div className="content-body">
        <h2 className="title">{Name}</h2>
        <p className="preview">{subDescription}</p>
        <div className="info-area-1">
          {
            Ticketinfo === "免費參觀" &&
            <span className="category">免費參觀</span>
          }
          {
            Opentime === "全天候開放" &&
            <span className="category">全天候開放</span>
          }
        </div>
        <div className="info-area-2">
          <div className="icon-and-span">
            <i className="fa fa-map-marker"></i>
            <span>{Zone}</span>
          </div>
          <div className="icon-and-span">
            <i className="fa fa-clock-o"></i>
            <span>{Opentime}</span>
          </div>
        </div>
      </div>    
    </Link>
  );
};

export default ContentCard;