import React, { Component } from 'react';
import axios from 'axios';

import { debounce } from '../support';

export default class BlogPostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      header: '',
      subHeader: '',
      title: '',
      description: '',
      imageLink: '',
      isLoaded: false,
    };
    this.handleFormInputs = this.handleFormInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clean = this.clean.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  handleFormInputs({ target }) {
    const { type, checked, value, name } = target;
    const inputValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: value
    })
  }

  clean() {
    const cleanedState = Object.keys(this.state)
    .filter(name => name != "isLoaded")
    .reduce((curr, next,idx, original) => {
        curr[next] = ''
        return curr;
    }, {});
    console.log(cleanedState)
    this.setState(cleanedState);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/webedia/posts', this.state)
      .then(result => {
        console.log(result)
      })
    this.clean();
  }


  render(){
    return(
      <div>
        <div className={this.state.isLoaded ? 'hide': 'show'}>
          <div className="loader">Loading...</div>
        </div>
        <span>Create New Blog Post</span>
        <div className={this.state.isLoaded ? 'show': 'hide'}>
          <form onSubmit={ this.handleSubmit } className="ui form">
            <div className="field">
              <label>Header Title</label>
              <textarea 
                type="text" 
                name="header" 
                placeholder="type here  your Header Title" 
                autoCorrect="off" 
                autoCapitalize="words"
                required
                onChange={ this.handleFormInputs }
                value={this.state.header}/>
            </div>
            <div className="field">
              <label>Sub Header Title</label>
              <textarea 
                type="text" 
                name="subHeader" 
                placeholder="Type complementary info to Header Title"
                autoCorrect="off" 
                autoCapitalize="words"
                required 
                onChange={ this.handleFormInputs }
                value={this.state.subHeader}/>
            </div>
            <div className="field">
              <label>Main title</label>
              <textarea 
                type="text" 
                name="title" 
                placeholder="condensed info about the blog post" 
                autoCorrect="off" 
                autoCapitalize="words"
                required 
                onChange={ this.handleFormInputs }
                value={this.state.title}/>
            </div>
            <div className="field">
              <label>Description</label>
              <textarea 
                type="text" 
                name="description" 
                placeholder="the full body of your blog post" 
                autoCorrect="off" 
                autoCapitalize="words"
                required 
                onChange={ this.handleFormInputs }
                value={this.state.description}/>
            </div>
            <div className="field">
              <input 
                type="text" 
                name="imageLink" 
                placeholder="url image"  
                onChange={ this.handleFormInputs }
                value={this.state.imageLink}/>
            </div>
            <div className="field">
              <figure className="imagem-form">
                <img type="image" src={ this.state.imageLink } />
              </figure>
            </div>
            <button className="ui button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

