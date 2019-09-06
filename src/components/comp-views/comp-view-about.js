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
        <h5 className="contact blue-title">{this.props.language.language.about.media}</h5>
        <div className="row media-container">
          <div className="col-4">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alejandra-silva-suazo/"><i className="fab fa-linkedin" data-toggle="tooltip" data-placement="top" title="Linkedin"></i></a>
          </div>
          <div className="col-4 centering-col">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/alelulu"><i className="fab fa-github" data-toggle="tooltip" data-placement="top" title="Github"></i></a>
          </div>
          <div className="col-4 centering-col">
            <a id="curriculum" target="_blank" rel="noopener noreferrer" href="./../../assets/curriculum/CV-Alejandra-Silva.pdf" download="curriculum"><i className="fab fas fa-file-pdf" data-toggle="tooltip" data-placement="top" title="Curriculum"></i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewAbout;