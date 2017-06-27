import React from 'react';
import { ResponsiveComponent } from 'react-responsive-component';

import Header from './Header';
import CardList from './CardList';

const Desktop = () => {
  return(
      <ResponsiveComponent query="only screen and (min-width: 901px)">
        <Header>
          <p>Um Site do <span className="logo">Web<i>edia</i></span><i className="trademark">&trade;</i> Group</p>
        </Header>
        <CardList />
      </ResponsiveComponent>
  )
}

export default Desktop;