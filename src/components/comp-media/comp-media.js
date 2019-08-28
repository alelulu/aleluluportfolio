import React, { Component } from 'react';
import './comp-media.css';
import Icon from '../comp-icon/comp-icon';


class Media extends Component {
   
  render(){
	  return (
      <div className="media-container container">
				<div className="row centered">
          <div className="col centered">
            <a className="a-to-center" href="https://www.linkedin.com/in/alejandra-silva-suazo/"><Icon iconclass="fab fa-linkedin" title="LinkedIn"/></a>
          </div>
          <div className="col centered">
            <a className="a-to-center" href="https://github.com/alelulu"><Icon iconclass="fab fa-github" title="GitHub"/></a>
          </div>
          <div className="col centered">
            <a className="a-to-center" href="https://www.instagram.com/alelulu_/"><Icon iconclass="fab fa-instagram" title="Instagram"/></a>
          </div>
          <div className="col centered">
            <a className="a-to-center" href="https://alewannacake.tumblr.com/"><Icon iconclass="fab fa-tumblr-square" title="Tumblr"/></a>
          </div>
				</div>
      </div>
    )
  }
}

export default Media;

