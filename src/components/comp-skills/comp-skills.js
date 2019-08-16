import React, { Component } from 'react';
import './comp-skills.css';
import Icon from '../comp-icon/comp-icon';


class Skills extends Component{
  render(){
	  return (
      <div className="skills-container container">
				<div className="row">

					<a href="#"><Icon iconclass="fab fa-html5" title="HTML5"/></a>
					<a href="#"><Icon iconclass="fab fa-js" title="JavaScript"/></a>
					<a href="#"><Icon iconclass="fab fa-css3-alt" title="CSS3"/></a>
				</div>
				<div className="row">
					<a href="#"><Icon iconclass="fab fa-node-js" title="NodeJS"/></a>
					<a href="#"><Icon iconclass="fab fa-npm" title="npm"/></a>
					<a href="#"><Icon iconclass="fab fa-bootstrap" title="Bootstrap"/></a>
				</div>
				<div className="row">
					<a href="#"><Icon iconclass="fab fa-react" title="React"/></a>
					<a href="#"><Icon iconclass="fab fa-git-alt" title="Git"/></a>
					<a href="#"><Icon iconclass="fab fa-adobe" title="Adobe-Photoshop"/></a>
				</div>
      </div>
    )
  }
}

export default Skills;