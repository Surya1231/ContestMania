/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import { newsData } from '../../api/data/newsData';

function News() {
  return (
    <div className="container py-3">
      {newsData.map((news) => (
        <div key={news.id} className={`alert alert-${news.style}`} role="alert">
          {news.news}
          <div className="clearfix">
            <span className="float-right text-muted">{news.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
