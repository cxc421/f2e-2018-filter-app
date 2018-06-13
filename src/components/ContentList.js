import React from 'react';
import 'styles/ContentList.scss';
import FilterTag from 'components/FilterTag';
import ContentCard from 'components/ContentCard';

// demo
import URL_CONTENT_2 from 'images/content-2.jpg';

const ContentList = () => {
  const list = [
    {
      imgUrl: URL_CONTENT_2,
      title: "Kogi Cosby serater.",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quas, unde autem amet fugit mollitia aliquid veritatis eius ab, reiciendis atque itaque optio dolores velit consequuntur exercitationem cupiditate fuga quibusdam.",
      author: "Ethan Foster",
      category: "Entertainment",
      location: "Kaohsiung City",
      date: "2018/5/24"
    }
  ];
  for (let i=1; i<5; i++) {
    list.push(list[0]);
  }

  return (
    <div className="content-list">
      <p className="list-num-text">Showing <em>{ 15 }</em> results by...</p>
      <div className="filter-tags-area">
        <FilterTag>Koahsiung</FilterTag>
        <FilterTag>Entertainment</FilterTag>
      </div>
      {
        list.map((obj, idx) => 
          <ContentCard key={idx} {...obj} />
        )
      }
    </div>
  );
};

export default ContentList;