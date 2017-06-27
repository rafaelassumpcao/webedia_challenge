import React from 'react';

import CardSection from './CardSection';

const Card = props => {
  return(
    <div className="card">
      <CardSection>
        <h1 className="card-section-title">
          Titulo Principal Muito grande e bla bla bla 
          logo vai ter problemas
        </h1>
        <h3 className="card-section-subtitle">
          Sed quis sagittis dolor, non interdum sapien. 
          Donec nec ligula sit amet metus facilisis euismod. 
          Sed finibus, nisl a ultricies facilisis, ex augue 
          pulvinar lorem, et dictum dolor felis vel nisl. 
          Praesent dapibus erat in lectus scelerisque sollicitudin. Vestibulum ante ipsum primis in 
          faucibus orci luctus et ultrices posuere cubilia Curae; Proin sapien felis,
           porttitor ac gravida eget, ultrices sed quam. 
           Nunc quis tristique quam. Maecenas sagittis vitae enim vel rhoncus. Maecenas 
           ac erat posuere
        </h3>
      </CardSection>
      <CardSection>
        <figure className="responsive-img">
          <img src={"http://www.planwallpaper.com/static/images/b807c2282ab0a491bd5c5c1051c6d312_rP0kQjJ.jpg"} alt="image alt"/>
        </figure>
      </CardSection>
       <CardSection>
          <div className="bar"></div>
      </CardSection>
      <CardSection>
          <h2 className="card-section-footer-title">, nisl a ultricies facilisis, ex augue 
          pulvinar lorem, et di</h2>
          <p className="card-section-p">
            ibus erat in lectus scelerisque sollicitudin. Vestibulum ante ipsum primis in 
          faucibus orci luctus et ultrices posuere cubilia Curae; Proin sapien felis,
           porttitor ac gravida eget, ultrices sed quam. 
           Nunc quis tristique quam. Maecenas sagittis vitae enim vel rhoncus. Maecenas 
           ac erat posuere
          </p>
      </CardSection>
    </div>
  );
}

export default Card;