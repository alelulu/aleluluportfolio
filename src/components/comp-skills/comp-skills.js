import React, { Component } from 'react';
import './comp-skills.css';
import Icon from '../comp-icon/comp-icon';


class Skills extends Component{
  render(){
	  return (
      <div className="skills-container">
				<div className="row">
					<Icon iconclass="fab fa-html5" title="Html 5"/>
					<Icon iconclass="fab fa-js"/>
					<Icon iconclass="fab fa-css3-alt"/>
				</div>
				<div className="row">
					<Icon iconclass="fab fa-node-js"/>
					<Icon iconclass="fab fa-npm"/>
					<Icon iconclass="fab fa-bootstrap"/>
				</div>
				<div className="row">
					<Icon iconclass="fab fa-react"/>
					<Icon iconclass="fab fa-git-alt"/>
					<Icon iconclass="fab fa-adobe"/>
				</div>
      </div>
    )
  }
}

export default Skills;