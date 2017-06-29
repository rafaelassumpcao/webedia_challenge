import React from 'react';

const CardSection = props => {

  return (
    <section className="card-section">
      {props.children}
    </section>
  );
};

export default CardSection;