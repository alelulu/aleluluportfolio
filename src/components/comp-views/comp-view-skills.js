import React, { Component } from 'react';
import './comp-view-about.css';
import Icon from '../comp-icon/comp-icon'

class ViewSkills extends Component{
  render(){
	  return (
      <div className="view-container container">
          <div className="row center-pls">
            <div className="col center-pls"><Icon iconclass="fab fa-html5" title="HTML5"/></div>
            <div className="col center-pls"><Icon iconclass="fab fa-js" title="JavaScript"/></div>
            <div className="col center-pls"><Icon iconclass="fab fa-css3-alt" title="CSS3"/></div>
          </div>
          <div className="row">
            <div className="col"><a href="#"><Icon iconclass="fab fa-node-js" title="NodeJS"/></a></div>
            <div className="col"><a href="#"><Icon iconclass="fab fa-npm" title="npm"/></a></div>
            <div className="col"><a href="#"><Icon iconclass="fab fa-bootstrap" title="Bootstrap"/></a></div>
          </div>
          <div className="row">
            <div className="col"><a href="#"><Icon iconclass="fab fa-react" title="React"/></a></div>
            <div className="col"><a href="#"><Icon iconclass="fab fa-git-alt" title="Git"/></a></div>
            <div className="col"><a href="#"><Icon iconclass="fab fa-adobe" title="Adobe-Photoshop"/></a></div>
          </div>
      </div>
    )
  }
}

export default ViewSkills;