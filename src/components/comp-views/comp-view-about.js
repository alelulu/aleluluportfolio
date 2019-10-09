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
          <div className="col">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alejandra-silva-suazo/"><i className="fab fa-linkedin about-icon" data-toggle="tooltip" data-placement="top" title="Linkedin"></i></a>
          </div>
          <div className="col centering-col">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/alelulu"><i className="fab fa-github about-icon" data-toggle="tooltip" data-placement="top" title="Github"></i></a>
          </div>
          <div className="col centering-col">
            <a target="_blank" rel="noopener noreferrer" href="https://app.talento.laboratoria.la/profile/MzcDVGGTKidxQT2N2tcn51Sp7HD3"><i className="fab fas fa-laptop-code about-icon" data-toggle="tooltip" data-placement="top" title="App de Talento Laboratoria"></i></a>
          </div>
          <div className="col centering-col">
            <a id="curriculum" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1xUEkvPAUn5V5APFXUhlt-sipgn9TE_0F/view?usp=sharing"><i className="fab fas fa-file-pdf about-icon" data-toggle="tooltip" data-placement="top" title="Currículum"></i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewAbout;