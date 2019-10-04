import React, { Component } from 'react';
import './comp-img.css';
import Ale from '../../assets/img/lale.png'

class Img extends Component{
  render(){
	  return (
      <div className="img-container container">
        <div className="row">
          <div className="col">
            <img id="avatar-img" src={Ale} alt="Foto Ale"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Img;


