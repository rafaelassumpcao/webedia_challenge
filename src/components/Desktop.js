import React from 'react';
import { ResponsiveComponent } from 'react-responsive-component';

import Header from './Header';
import CardList from './CardList';

const Desktop = () => {
  return(
      <ResponsiveComponent query="only screen and (min-width: 901px)">
        <Header>
          
              <header>
                <p>
                  Um Site do <span className="logo">Web<i>edia</i></span>
                  <i className="trademark">&trade;</i> Group
                  </p>
              </header>
              <nav className="header-menu">
                {/*Link className="menu-item" to="/post">Create Now</Link>  */}              
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Last News</a>
                <a href="#">Suggestions</a>
                <a href="#">Marketing</a>
                <a href="#">Portifolio</a>
                <a href="#">Contacts</a>
                <a href="#">Lorem Ipsur</a>
                <a href="#">Lorem Ipsur</a>
                <a href="#">Lorem Ipsur</a>
              </nav>
        </Header>
        <CardList desktop={true}/>
      </ResponsiveComponent>
  )
}

export default Desktop;