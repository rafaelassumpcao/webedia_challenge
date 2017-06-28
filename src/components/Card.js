import React from 'react';

import CardSection from './CardSection';

const Card = ({ blogPost, isDesktop }) => {
  const { header, subHeader, title, description, imageLink } = blogPost;
  return(
    <article className="card">
      <CardSection>
        <h1 className="card-section-title">
          { header }
        </h1>
        <h3 className="card-section-subtitle">
          { subHeader }
        </h3>
      </CardSection>
      <CardSection>
        <figure className="responsive-img">
          <img src={ imageLink } alt="blog post image"/>
        </figure>
      </CardSection>
      <div className={isDesktop ? "hide": ""}>
       <CardSection>
          <div className="bar"></div>
      </CardSection>
      <CardSection>
          <h2 className="card-section-footer-title">
            { title }
          </h2>
          <p className="card-section-p">
            { description }
          </p>
      </CardSection>
      </div>
    </article>
  );
}

export default Card;