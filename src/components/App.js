/**
 * the top level component responsible to render both
 * Desktop flow and  Mobile
 *  ResponsiveComponent - handle screen size and render if matches
 * (*) ResponsiveComponent  was used beacause to me is  a better declarative aproach in react world
 * than use css style media queries, but in essencial is the same.
 */

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

