import React, { Component } from 'react';
import { ResponsiveComponent } from 'react-responsive-component';
import axios from 'axios';

import Card from './Card';

export default class CardList extends Component {

  constructor(props){
    super(props);
    this.state = { posts: [], isLoaded: false };
  }

  componentDidMount(){
    axios.get('/webedia/posts')
      .then(result => this.setState({posts: result.data}));
  }


  render(){
    const cardItems= this.state.posts.map((post, index) => {
      if(index === 0) {
        return (<Card blogPost={post} key={ post._id } />);
      }
      return (<Card blogPost={post} isDesktop={this.props.desktop} key={ post._id } />)
      
    });
    return(
      <div>
      <ResponsiveComponent query="only screen and (max-width: 900px)">
        <div className="card-list-mobile">
          { cardItems }
        </div>
      </ResponsiveComponent>

      <ResponsiveComponent query="only screen and (min-width: 901px)">
        <div className="card-list">
         { cardItems[0] }
          <div className="flex-container blue">
            <div className="red flex-item">{cardItems[1]}</div>
            <div className="red flex-item">{cardItems[2]}</div>
          </div>
        </div>
      </ResponsiveComponent>

      </div>
    );
  }
};