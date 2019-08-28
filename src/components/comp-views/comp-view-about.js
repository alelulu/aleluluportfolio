import React, { Component } from 'react';
import './comp-view-about.css';
import Img from '../comp-img/comp-img';

class ViewAbout extends Component{

  render(){
	  return (
      <div className="view-container container">
        <div className="row">
          <div className="col">
            <h3 className="red-title mb-4 mt-4">ALEJANDRA SILVA SUAZO</h3>
            <Img/>
            <h4 className="blue-title mt-4">{this.props.language.language.about.title}</h4>
            <p>{this.props.language.language.about.description}</p>
            <h5 className="contact blue-title">{this.props.language.language.about.subtitle}</h5>
            <h6 className="red-title">ale.silvasuazo@gmail.com</h6>
          </div>
        </div>
        <div className="row media-container">
          <div className="col-3">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alejandra-silva-suazo/"><i className="fab fa-linkedin" data-toggle="tooltip" data-placement="top" title="Linkedin"></i></a>
          </div>
          <div className="col-3 centering-col">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/alelulu"><i className="fab fa-github" data-toggle="tooltip" data-placement="top" title="Github"></i></a>
          </div>
          <div className="col-3 centering-col">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/alelulu_/"><i className="fab fa-instagram" data-toggle="tooltip" data-placement="top" title="Instagram"></i></a>
          </div>
          <div className="col-3 centering-col">
            <a target="_blank" rel="noopener noreferrer" href="https://alewannacake.tumblr.com/"><i className="fab fa-tumblr-square" data-toggle="tooltip" data-placement="top" title="Tumblr"></i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewAbout;