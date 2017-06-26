import React, { Component} from 'react';

import Header from './Header';


//import Menu from 'react-burger-menu/lib/menus/push'

export default class App extends Component {
  render(){
    return (
      <Header>
         <p>Um Site do <span className="logo">Web<i>edia</i></span><i className="trademark">&trade;</i> Group</p>
      </Header>  
    );
  }
  
}

