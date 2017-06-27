import React, { Component } from 'react';
import Push from 'react-burger-menu/lib/menus/push';
import { ResponsiveComponent } from 'react-responsive-component';
import { Link, Route, Switch } from 'react-router-dom';

import Header from './Header';
import CardList from './CardList';
import BlogPostForm from './BlogPostForm';  

export default class Mobile extends Component {

  constructor(props) {
    super(props);
    this.state = { isMenuOpen: false}
  }


  render(){
    return(
      <ResponsiveComponent query="only screen and (max-width: 900px)">
        <div id="outer-container">
            <Push 
              pageWrapId={ "page-wrap" } 
              outerContainerId={ "outer-container" } 
              width={ 300 }
              isOpen ={this.state.isMenuOpen}
              >
              <Link className="menu-item" to="/post">Post</Link>
                
            </Push>
            <main id="page-wrap">
              <Header>
                <p>Um Site do <span className="logo">Web<i>edia</i></span><i className="trademark">&trade;</i> Group</p>
              </Header>
              <Switch>
                <Route exact path="/" component={CardList}/>
                <Route exact path="/post" component={BlogPostForm}/>
              </Switch>
              
            </main>
          </div>
        </ResponsiveComponent>
    )
  }

}