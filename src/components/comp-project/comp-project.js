import React, { Component } from 'react';
import './comp-project.css';

class Project extends Component{
  render(){
	  return (
      <div className="project-container">
				<h4 className="project-title">{this.props.title}</h4>
				<img className="project-img" src={this.props.src} alt={this.props.alt}/>
				<p>{this.props.description}</p>
				<a target="_blank" rel="noopener noreferrer" href={this.props.linkdeploy}>{this.props.deploy}</a>
				<br/>
				<a className="project-github" target="_blank" rel="noopener noreferrer" href={this.props.linkgithub}>{this.props.repo}</a>
      </div>
    )
  }
}

export default Project;