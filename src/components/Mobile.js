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
                <Link className="menu-item" to="/">Home</Link>
                <Link className="menu-item" to="/create-post">New Post</Link>
                <Link className="menu-item" to="/news">Last News</Link>
                <Link className="menu-item" to="/suggestions">Suggestions</Link>
                <Link className="menu-item" to="/marketing">Marketing</Link>
                <Link className="menu-item" to="/portifolio">Portifolio</Link>
                <Link className="menu-item" to="/contacts">Contacts</Link>
                <Link className="menu-item" to="/curiosities">Curiosities</Link>
                <Link className="menu-item" to="/about">About Us</Link>
                <Link className="menu-item" to="/products">Shopping Cart</Link> 
                
            </Push>
            <main id="page-wrap">
              <Header>
                <p>Um Site do <span className="logo">Web<i>edia</i></span><i className="trademark">&trade;</i> Group</p>
              </Header>
              <Switch>
                <Route exact path="/" component={CardList}/>
                <Route exact path="/create-post" component={BlogPostForm}/>
                <Route exact path="/news" render={() => <div><h1>Check out your news recomendations</h1></div>}/>
                <Route exact path="/suggestions" render={() => <div><h1>News</h1></div>}/>
                <Route exact path="/marketing" render={() => <div><h1>Here is all our marketing stuff</h1></div>}/>
                <Route exact path="/portifolio" render={() => <div><h1>Portifolios</h1></div>}/>
                <Route exact path="/contacts" render={() => <div><h1>Please call us!</h1></div>}/>
                <Route exact path="/curiosities" render={() => <div><h1>curiosities</h1></div>}/>
                <Route exact path="/about" render={() => <div><h1>about</h1></div>}/>
                <Route exact path="/products" render={() => <div><h1>Shopping</h1></div>}/>
              </Switch>
            </main>
          </div>
        </ResponsiveComponent>
    )
  }

}