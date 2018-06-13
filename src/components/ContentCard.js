import React from 'react';
import 'styles/ContentCard.scss';

const ContentCard = ({imgUrl, title, content, author, category, location, date}) => {
  return (
    <a href="#" className="content-card">
      <div
        className="content-img"
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
      >
      </div>
      <div className="content-body">
        <h2 className="title">{title}</h2>
        <p className="preview">{content}</p>
        <div className="info-area-1">
          <span className="author">{author}</span>
          <span className="category">{category}</span>
        </div>
        <div className="info-area-2">
          <div className="icon-and-span">
            <i className="fa fa-map-marker"></i>
            <span>{location}</span>
          </div>
          <div className="icon-and-span">
            <i className="fa fa-calendar"></i>
            <span>{date}</span>
          </div>
        </div>
      </div>    
    </a>
  );
};

export default ContentCard;