import React, { Component } from 'react';
import './comp-skills.css';
import Icon from '../comp-icon/comp-icon';


class Skills extends Component{
  render(){
	  return (
      <div className="skills-container">
				<div className="row">
					<Icon iconclass="fab fa-html5" title="HTML5"/>
					<Icon iconclass="fab fa-js" title="JavaScript"/>
					<Icon iconclass="fab fa-css3-alt" title="CSS3"/>
				</div>
				<div className="row">
					<Icon iconclass="fab fa-node-js" title="NodeJS"/>
					<Icon iconclass="fab fa-npm" title="npm"/>
					<Icon iconclass="fab fa-bootstrap" title="Bootstrap"/>
				</div>
				<div className="row">
					<Icon iconclass="fab fa-react" title="React"/>
					<Icon iconclass="fab fa-git-alt" title="Git"/>
					<Icon iconclass="fab fa-adobe" title="Adobe-Photoshop"/>
				</div>
      </div>
    )
  }
}

export default Skills;