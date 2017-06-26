import React, { Component } from 'react';

import { ResponsiveComponent } from 'react-responsive-component';

export default class Header extends Component {

    render() {
      return(
        <div>
          <ResponsiveComponent query="only screen and (min-width: 700px)">
            <div className="">
              <h1>Mais de 700px</h1>
            </div>
          </ResponsiveComponent>

          <ResponsiveComponent query="only screen and (max-width: 699px)">
            <header className="header-mobile">
              <div className="menu-item-mobile">
                <i className="material-icons">menu</i>
              </div>
              <div className="menu-item-mobile">
                {this.props.children}
              </div>
            </header>
          </ResponsiveComponent>
        </div>
      );
    }
};