/**
 * Responsible to render all cards with blog posts
 * pagiantion was fully implemented in desktop version, but no in mobile.
 */

import React, { Component } from 'react';
import { ResponsiveComponent } from 'react-responsive-component';
import axios from 'axios';

import Card from './Card';
import Paginator from './Paginator';

export default class CardList extends Component {

  constructor(props){
    super(props);
    this.state = { 
      posts: [],
      counter: 0,
      isLoaded: false 
    };
    this.changePage = this.changePage.bind(this);
    this.handleCardItemClik = this.handleCardItemClik.bind(this);
  }

  handleCardItemClik(cardSelected) {
    alert(`The card with top level header \n"${cardSelected.header}"\nWas clicked!`);  
  }

  changePage(page) {
    console.log(page)
    axios.get(`/webedia/posts?page=${page}`)
      .then(result => {
        console.log(result.data)
        this.setState({
          posts: result.data.all, 
          offset: result.data.offset,
          counter: result.data.count 
        })
      });
  }

  componentDidMount(){
    axios.get('/webedia/posts')
      .then(result => {
        console.log(result.data)
        this.setState({
          posts: result.data.all, 
          counter: result.data.count 
        })
      });
  }


  render(){    

    const cardItemsMobile = 
      this.state.posts.map(post => ( <Card onCardClick={this.handleCardItemClik} blogPost={ post } key={ post._id }/> ));

    const hasPosts = this.state.posts.length !== 0;
    let firstCard, allOtherCards;
    if (hasPosts) {
      const [head, ...tail] = this.state.posts;
      firstCard = <Card onCardClick={ this.handleCardItemClik} blogPost={head} />;
      allOtherCards = tail.map((post, index) =>  
        (
          <div key={ post._id } className="flex-item">
            <Card blogPost={ post } 
                  isDesktop={ this.props.desktop }
                  onCardClick={ this.handleCardItemClik }
            />
          </div>
        )
      )
    }

    return(
      <div>
      <ResponsiveComponent query="only screen and (max-width: 900px)">
        <div className="card-list-mobile">
          { cardItemsMobile }
        </div>
      </ResponsiveComponent>

      <ResponsiveComponent query="only screen and (min-width: 901px)">
        <div className="card-list">
         { firstCard }
          <div className="flex-container">
            { allOtherCards }
          </div>
          <Paginator 
            total={ this.state.counter } 
            page={ this.state.offset }
            onChangePage={ this.changePage }
          />
        </div>
      </ResponsiveComponent>

      </div>
    );
  }
};