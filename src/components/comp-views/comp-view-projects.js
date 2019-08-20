import React, { Component } from 'react';
import Project from '../comp-project/comp-project'
import './comp-view-about.css';

class ViewProjects extends Component{
  render(){
	  return (
      <div className="view-container container">
        <div className="row">
          <div className="col">
            <h3 className="red-title mt-3">Projects</h3>
            <p>These are some of my beloved projects</p>
          </div>
        </div>
        <div className="row row-to-center">
          <div className="col-sm-12 col-md-6">
            <Project title="The Simpsons Trivia Game" alt="SImpsons Trivia image" src='https://i.ibb.co/Gcw0pJ9/homer.png' 
            description="Trivia about the famous TV Show The Simpsons. After the user enters its name there are three categories to play." 
            linkdeploy="https://alelulu.github.io/Trivia/index.html" linkgithub="https://github.com/alelulu/Trivia"/>
          </div>
          <div className="col-sm-12 col-md-6">
            <Project title="Data-Lovers" alt="Pokemon image" src='https://i.ibb.co/PQ2YxDX/pokeball.png' 
            description="Wikidex is a web application that allows the user to filter and order a list of 151 Pokemon from Kanto region." 
            linkdeploy="https://alelulu.github.io/SCL009-data-lovers/src/index.html" linkgithub="https://github.com/alelulu/SCL009-data-lovers"/>
          </div>
          <div className="col-sm-12 col-md-6">
            <Project title="MD-Links" alt="Console image" src='https://i.ibb.co/nMdzsvG/mdlinks.png' 
            description="Open source code library made to know the status of links inside a file with .md extension. " 
            linkdeploy="https://www.npmjs.com/package/alelulu-md-links" linkgithub="https://github.com/alelulu/SCL009-md-links"/>
          </div>
          <div className="col-sm-12 col-md-6">
            <Project title="SVKH" alt="SVKH image" src='https://i.ibb.co/svCntZZ/svkh.png' 
            description="Made as a vanilla Javascript SPA, this is a web site to make more visible this rare syndrome in Chile." 
            linkdeploy="https://sindrome-vkh.firebaseapp.com/" linkgithub="https://github.com/alelulu/SVKH-Chile"/>
          </div>
          <div className="col-sm-12 col-md-6">
            <Project title="Google Maps" alt="Map image" src='https://i.ibb.co/pLCqryr/map.png' 
            description="Web application that allows the user to localize stores in Mexico City. The user can also add the store to favorites and delete it." 
            linkdeploy="https://mexico-stores.herokuapp.com/" linkgithub="https://github.com/alelulu/generation-take-home-intern"/>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewProjects;