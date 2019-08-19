import React, { Component } from 'react';
import Project from '../comp-project/comp-project'
import './comp-view-about.css';

class ViewProjects extends Component{
  render(){
	  return (
      <div className="view-container container">
        <div className="row">
          <div className="col">
            <h3 className="red-title">Projects</h3>
            <p>These are some of my beloved projects</p>
          </div>
        </div>
        <div className="row row-to-center">
          <div className="col-sm-12 col-md-6">
            <Project title="Trivia Los Simpsons" src='https://i.ibb.co/Gcw0pJ9/homer.png' description="Lorem ipsum" linkdeploy="https://alelulu.github.io/Trivia/index.html" linkgithub="https://github.com/alelulu/Trivia"/>
          </div>
          <div className="col-sm-12 col-md-6">
            <Project title="Data-Lovers" src='https://i.ibb.co/PQ2YxDX/pokeball.png' description="Lorem ipsum" linkdeploy="https://alelulu.github.io/SCL009-data-lovers/src/index.html" linkgithub="https://github.com/alelulu/SCL009-data-lovers"/>
          </div>
          <div className="col-sm-12 col-md-6">
            <Project title="MD-Links" src='https://i.ibb.co/nMdzsvG/mdlinks.png' description="Lorem ipsum" linkdeploy="https://www.npmjs.com/package/alelulu-md-links" linkgithub="https://github.com/alelulu/SCL009-md-links"/>
          </div>
          <div className="col-sm-12 col-md-6">
            <Project title="SVKH" src='https://i.ibb.co/svCntZZ/svkh.png' description="Lorem ipsum" linkdeploy="https://sindrome-vkh.firebaseapp.com/" linkgithub="https://github.com/alelulu/SVKH-Chile"/>
          </div>
          <div className="col-sm-12 col-md-6">
            <Project title="Google Maps" src='https://i.ibb.co/pLCqryr/map.png' description="Lorem ipsum" linkdeploy="https://mexico-stores.herokuapp.com/" linkgithub="https://github.com/alelulu/generation-take-home-intern"/>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewProjects;