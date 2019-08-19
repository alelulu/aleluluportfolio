import React, { Component } from 'react';
import './comp-view-about.css';
import Icon from '../comp-icon/comp-icon'

class ViewAbout extends Component{
  render(){
	  return (
      <div className="view-container container">
        <div className="row">
          <div className="col">
            <h3 className="red-title">ALEJANDRA SILVA SUAZO</h3>
            <h4 className="blue-title">FRONT-END DEVELOPER</h4>
            <p>I'm looking forward to become
            a great web developer, puting part of my
            soul in every line of code.</p>
            <h5 className="blue-title">You can contact me directly via</h5>
            <h6 className="red-title">ale.silvasuazo@gmail.com</h6>
          </div>
        </div>
        <div className="row row-to-center">
          <div className="col-3 centering">
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
          </div>
        </div>
      </div>
    )
  }
}

export default ViewAbout;