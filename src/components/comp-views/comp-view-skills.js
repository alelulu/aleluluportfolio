import React, { Component } from 'react';
import './comp-view-about.css';

class ViewSkills extends Component{
  render(){
	  return (
      <div className="view-container container">
        <div className="row">
          <div className="col">
            <h3 className="red-title mt-3">{this.props.language.language.skills.title}</h3>
            <p>{this.props.language.language.skills.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col sm-4">
            <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"><i className="fab fa-html5" data-toggle="tooltip" title="HTML5"></i></a>
            <h4 className="blue-title">HTML</h4>
          </div>
          <div className="col-sm-4">
            <a target="_blank" rel="noopener noreferrer" href="https://www.javascript.com/"><i className="fab fa-js" data-toggle="tooltip" title="Javascript"></i></a>
            <p className="blue-title">Javascript</p>
          </div>
          <div className="col-sm-4">
            <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/es/docs/Archive/CSS3"><i className="fab fa-css3-alt" data-toggle="tooltip" title="CSS3"></i></a>
            <p className="blue-title">CSS 3</p>
          </div>
          <div className="col-sm-4">
            <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/"><i className="fab fa-node-js" data-toggle="tooltip" title="NodeJs"></i></a>
            <p className="blue-title">Node.js</p>
          </div>
          <div className="col-sm-4">
            <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/"><i className="fab fa-npm" data-toggle="tooltip" title="Npm"></i></a>
            <p className="blue-title">Npm</p>
          </div>
          <div className="col-sm-4">
            <a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/"><i className="fab fa-bootstrap" data-toggle="tooltip" title="Bootstrap"></i></a>
            <p className="blue-title">Bootstrap</p>
          </div>
          <div className="col-sm-4">
            <a target="_blank" rel="noopener noreferrer" href="https://es.reactjs.org/"><i className="fab fa-react" data-toggle="tooltip" title="ReactJs"></i></a>
            <p className="blue-title">React.js</p>
          </div>
          <div className="col-sm-4">
            <a target="_blank" rel="noopener noreferrer" href="https://git-scm.com/"><i className="fab fa-git-alt" data-toggle="tooltip" title="Git"></i></a>
            <p className="blue-title">Git</p>
          </div>
          <div className="col-sm-4">
            <a target="_blank" rel="noopener noreferrer" href="https://www.adobe.com/la/products/photoshop.html?promoid=PC1PQQ5T&mv=other"><i className="fab fa-adobe" data-toggle="tooltip" title="Adobe Photoshop"></i></a>
            <p className="blue-title">Photoshop</p>
          </div>
        </div>
      </div>
    )
  }
}


export default ViewSkills;