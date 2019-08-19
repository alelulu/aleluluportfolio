import React, { Component } from 'react';
import './comp-project.css';

class Project extends Component{
  render(){
	  return (
      <div className="project-container">
				<h5>{this.props.title}</h5>
				<img className="project-img" src={this.props.src} alt={this.props.alt}/>
				<p>{this.props.description}</p>
				<a href={this.props.linkdeploy}>Deploy</a>
				<br/>
				<a href={this.props.linkgithub}>Github Repository</a>
      </div>
    )
  }
}

export default Project;