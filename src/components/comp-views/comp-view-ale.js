import React, { Component } from 'react';
import './comp-view-about.css'

class ViewAle extends Component{
  render() {
    return (
      <div className="view-container container">
        <div className="row">
          <div className="col">
            <h3 className="red-title mt-3">{this.props.language.language.ale.title}</h3>
            <p>{this.props.language.language.ale.description}</p>

          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img className="like-icon" alt="heart" src="https://i.ibb.co/HP8C1Jj/pinkheart.png"></img>
            <h4 className="red-title">{this.props.language.language.ale.interests.likes.title}</h4>
            <p>{this.props.language.language.ale.interests.likes.likes.cats}</p>
            <p>{this.props.language.language.ale.interests.likes.likes.avocado}</p>
            <p>{this.props.language.language.ale.interests.likes.likes.beatles}</p>
            <p>{this.props.language.language.ale.interests.likes.likes.memes}</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <img className="like-icon" alt="broken heart" src="https://i.ibb.co/0jXLzYG/dislike.png"></img>
            <h4 className="blue-title">{this.props.language.language.ale.interests.likes.dislikes.title}</h4>
            <p>{this.props.language.language.ale.interests.likes.dislikes.dislikes.slugs}</p>
            <p>{this.props.language.language.ale.interests.likes.dislikes.dislikes.spicy}</p>
            <p>{this.props.language.language.ale.interests.likes.dislikes.dislikes.animal}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewAle;