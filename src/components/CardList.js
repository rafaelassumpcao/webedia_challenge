import React, { Component } from 'react';
import { ResponsiveComponent } from 'react-responsive-component';

import Card from './Card';

export default class CardList extends Component {

  


  render(){
    return(
      <div>
      <ResponsiveComponent query="only screen and (max-width: 900px)">
        <div className="card-list-mobile">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </ResponsiveComponent>

      <ResponsiveComponent query="only screen and (min-width: 901px)">
        <div className="card-list">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </ResponsiveComponent>

      </div>
    );
  }
};