import React, { Component } from 'react';
import { ResponsiveComponent } from 'react-responsive-component';
import { Link, Route } from 'react-router-dom';
import BlogPostForm from './BlogPostForm';


export default class Header extends Component {


    render() {
      return(
        <div>
          <ResponsiveComponent query="only screen and (min-width: 901px)">
            <div className="header">
              {this.props.children}
            </div>
          </ResponsiveComponent>

          <ResponsiveComponent query="only screen and (max-width: 900px)">
            <header className="header-mobile">
              <div className="menu-item-mobile" onClick={ this.props.handleToogleMenu }>
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