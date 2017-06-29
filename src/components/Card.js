import React from 'react';

import CardSection from './CardSection';

const Card = ({ blogPost, isDesktop = false, onCardClick }) => {
  const { header, subHeader, title, description, imageLink } = blogPost;
  return(
    <article onClick={() => onCardClick(blogPost)} className="card">
      <CardSection>
        <header className="card-section-title">
          { header }
        </header>
        <complementary className="card-section-subtitle">
          { subHeader }
        </complementary>
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