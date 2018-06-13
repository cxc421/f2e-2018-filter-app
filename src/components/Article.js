import React from 'react';
import 'styles/Article.scss';
// demo
import IMG_URL from 'images/content-2.jpg';

const Article = (props) => {
  const title = "Kogi Cosby serater ethical";
  const author = "Ethan Foster";
  const category = "Entertainment";
  const location = "Kaohsiung City";
  const date = "2018/5/24 - 2018/5/31";

  return (
    <div className="article">
      <div className="article-nav">
        <a href="/">Explore</a>
        <span className="slash">/</span>
        <span className="title">{title}</span>
      </div>
      <div className="article-img">
        <img src={IMG_URL} alt="article-img"/>
      </div>
      <div className="article-body">

        <h1>{title}</h1>

        <div className="info-area-1">
          <div className="author">
          { author }
          </div>
          <div className="category">
          { category }
          </div>
        </div>

        <div className="info-area-2">
        
          <i className="fa fa-map-marker"></i>
          <span>{location}</span>

          <i className="fa fa-calendar"></i>
          <span>{date}</span>

        </div>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae libero possimus quisquam commodi harum, adipisci ullam consequatur, saepe minima autem quae iusto at, repellendus consequuntur fugit sint error a eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt consequatur earum! Distinctio mollitia sint earum eum rem omnis! Facere dolorem id repellat consequatur ducimus, quae non praesentium quas voluptatibus.
        <br/>
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quod atque ut iure at veniam tempora corrupti sed nisi pariatur perspiciatis sunt facere saepe odio, ratione possimus beatae? Iure, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim architecto repudiandae accusamus, ex at corrupti esse ratione, earum aliquam ea non! Voluptatum voluptate at ullam, nostrum consequatur quas soluta ex.

        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati a illo, cupiditate odit quam quos atque necessitatibus, quae nam error corporis alias labore, consectetur vitae dignissimos sapiente itaque perspiciatis! Ullam odio minima repellendus id ex illum sapiente corporis velit reprehenderit excepturi quidem sequi quas illo modi temporibus harum blanditiis, cupiditate nobis. Commodi totam nihil facilis voluptatum inventore sunt dignissimos magni repellendus temporibus, sequi iure tempora molestias quaerat maiores maxime voluptate. Earum ipsum dicta itaque numquam tempore esse inventore, nulla consectetur eum placeat natus repudiandae nemo eveniet doloribus voluptas possimus, quis sint commodi, minima vitae voluptates. Ab officia rerum officiis sed? Rerum rem odio expedita repellendus quidem nobis voluptatibus deserunt est natus quibusdam quis doloribus consequuntur ab tempora quas error molestiae provident, possimus eos? Natus eius, ipsa est culpa commodi tempora recusandae quae nemo libero unde possimus dolorem iure ipsum reprehenderit reiciendis blanditiis adipisci dicta labore perferendis id ex enim consequatur magnam! Ipsam fugit eum alias ea saepe tempore ducimus excepturi, tempora minus, quos, eaque assumenda maxime magni quod? Molestiae optio animi delectus eos aspernatur dolorem ab! Consectetur porro accusantium veritatis temporibus quasi delectus magnam cumque corporis suscipit. Expedita sint incidunt fugit hic, minima accusantium magni, est ipsum fugiat ducimus consectetur.
        </p>

      </div>
    </div>  
  );
};

export default Article;