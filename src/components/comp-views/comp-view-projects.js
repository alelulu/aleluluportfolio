import React, { Component } from 'react';
import Project from '../comp-project/comp-project'
import './comp-view-about.css';
import michiImg from '../../assets/img/michi.png';
import mapImg from '../../assets/img/map.png';
import svkhImg from '../../assets/img/svkh.png';
import mdLinksImg from '../../assets/img/mdlinks.png';
import pokemonImg from '../../assets/img/pokeball.png';
import homerImg from '../../assets/img/homer.png';

class ViewProjects extends Component{
  render(){
	  return (
      <div className="view-container container">
        <div className="row">
          <div className="col">
            <h3 className="red-title mt-3">{this.props.language.language.projects.title}</h3>
            <p>{this.props.language.language.projects.description}</p>
          </div>
        </div>
        <div className="row row-to-center">
          <div className="each-project-container col-sm-12 col-md-6">
            <Project title={this.props.language.language.projects.projects[5].title} alt="Michi image" src={michiImg}
            description={this.props.language.language.projects.projects[5].description}
            deploy={this.props.language.language.projects.deploy}
            repo={this.props.language.language.projects.repository}
            linkdeploy="https://expo.io/@alelulu/michivsshiba" linkgithub="https://github.com/alelulu/SCL009-tic-tac-toe"/>
          </div>
          <div className="each-project-container col-sm-12 col-md-6">
            <Project title={this.props.language.language.projects.projects[4].title} alt="Map image" src={mapImg}
            description={this.props.language.language.projects.projects[4].description}
            deploy={this.props.language.language.projects.deploy}
            repo={this.props.language.language.projects.repository}
            linkdeploy="https://mexico-stores.herokuapp.com/" linkgithub="https://github.com/alelulu/generation-take-home-intern"/>
          </div>
          <div className="each-project-container col-sm-12 col-md-6">
            <Project title={this.props.language.language.projects.projects[3].title} alt="SVKH image" src={svkhImg}
            description={this.props.language.language.projects.projects[3].description}
            deploy={this.props.language.language.projects.deploy}
            repo={this.props.language.language.projects.repository}
            linkdeploy="https://sindrome-vkh.firebaseapp.com/" linkgithub="https://github.com/alelulu/SVKH-Chile"/>
          </div>
          <div className="each-project-container col-sm-12 col-md-6">
            <Project title={this.props.language.language.projects.projects[2].title} alt="Console image" src={mdLinksImg} 
            description={this.props.language.language.projects.projects[2].description}
            deploy={this.props.language.language.projects.deploy}
            repo={this.props.language.language.projects.repository}
            linkdeploy="https://www.npmjs.com/package/alelulu-md-links" linkgithub="https://github.com/alelulu/SCL009-md-links"/>
          </div>
          <div className="each-project-container col-sm-12 col-md-6">
            <Project title={this.props.language.language.projects.projects[1].title} alt="Pokemon image" src={pokemonImg} 
            description={this.props.language.language.projects.projects[1].description}
            deploy={this.props.language.language.projects.deploy}
            repo={this.props.language.language.projects.repository}
            linkdeploy="https://alelulu.github.io/SCL009-data-lovers/src/index.html" linkgithub="https://github.com/alelulu/SCL009-data-lovers"/>
          </div>
          <div className="each-project-container col-sm-12 col-md-6">
            <Project title={this.props.language.language.projects.projects[0].title} alt="Simpsons Trivia image" src={homerImg}
            description={this.props.language.language.projects.projects[0].description}
            deploy={this.props.language.language.projects.deploy}
            repo={this.props.language.language.projects.repository}
            linkdeploy="https://alelulu.github.io/Trivia/index.html" linkgithub="https://github.com/alelulu/Trivia"/>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewProjects;