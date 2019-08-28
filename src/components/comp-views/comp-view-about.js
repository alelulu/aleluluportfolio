import React, { Component } from 'react';
import './comp-view-about.css';
import Media from '../comp-media/comp-media';
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
            <h5 className="blue-title">{this.props.language.language.about.subtitle}</h5>
            <h6 className="red-title">ale.silvasuazo@gmail.com</h6>
          </div>
        </div>
        <div className="row row-to-center">
          {/* <div className="col-3 centering">
            <a href="https://www.linkedin.com/in/alejandra-silva-suazo/"><Icon iconclass="fab fa-linkedin" title="LinkedIn"/></a>
          </div>
          <div className="col-3 centering">
            <a href="https://github.com/alelulu"><Icon iconclass="fab fa-github" title="GitHub"/></a>
          </div>
          <div className="col-3 centering">
            <a href="https://www.instagram.com/alelulu_/"><Icon iconclass="fab fa-instagram" title="Instagram"/></a>
          </div>
          <div className="col-3 centering">
            <a href="https://alewannacake.tumblr.com/"><Icon iconclass="fab fa-tumblr-square" title="Tumblr"/></a>
          </div> */}
          <Media />
        </div>
      </div>
    )
  }
}

export default ViewAbout;