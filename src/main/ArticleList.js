import React from 'react';
import Data from './Data';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => (
  <div className="row app">
    {Data.map((Data) => (
      <div className="col-12 p-3 ">
        <h3 className="description">{Data.description}</h3>
      </div>
    ))}

    {articles.map((article, key) => (
      <div className="col-md-4 p-3">
        <Link className="card p-1" key={key} to={`${article.title}`}>
          <img
            alt="{article.title}"
            src={article.img}
          />
          <section className="card-content p-3">
            <h3>
              {article.title} by {article.author}
            </h3>
            <h6 className="date">
              {article.date}
            </h6>
            <h4>📝 {article.content[0].substring(0, 100)}...</h4>
          </section>
        </Link>
      </div>
    ))}
  </div>
);

export default ArticleList;
