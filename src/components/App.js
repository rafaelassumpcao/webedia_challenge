import React, { Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Mobile from './Mobile';
import Desktop from './Desktop';
import BlogPostForm from './BlogPostForm';

import { ResponsiveComponent }  from 'react-responsive-component';

export default class App extends Component {

  render(){
    return (
      <div>
        <Desktop />
        <Mobile />     
      </div>
    );
  }
  
}

