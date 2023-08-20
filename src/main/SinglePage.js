import React from 'react';
import ArticleContent from './ArticleContent';
import { useParams } from 'react-router-dom';
import EditPage from "./EditPage";

const SinglePage = () => {
  const {endpoint} = useParams();

  if (endpoint === "md-editor") {
    return (
        <div className="p-1">
            <EditPage />
        </div>
    )
  }

  const article = ArticleContent.find((ele) => ele.title === endpoint);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
      <>
        <div className="p-1">
          <div className="card p-1">
            <main className="card-content p-3 p-md-5">
              <h1>
                <a href="/">{article.title}</a>
              </h1>
              <h3>{article.desc}</h3>
              <br/>
              <h4 className="date">{article.date}</h4>
              <p className="dotted" />
              {article.content.map((paragraph, key) => (
                  <h5 key={key}>{paragraph}</h5>
              ))}
            </main>
          </div>
        </div>
      </>
  );
};

export default SinglePage;

