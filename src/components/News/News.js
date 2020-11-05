import React from 'react';
import { newsData } from '../../api/data/newsData';

function News() {
  return (
    <div className="container py-5">
      {newsData.map((news) => (
        <div key={news.id} className="alert alert-info">
          {news.news}
          <span className="float-right">{news.date}</span>
        </div>
      ))}
    </div>
  );
}

export default News;
