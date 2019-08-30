import React, { Component } from 'react';
import './comp-view-about.css'

class ViewAle extends Component{
    render() {
        return (
            <div className="view-container container">
                <div className="row">
                    <div className="col">
                        <h3 className="red-title mt-3">{this.props.language.language.ale.title}</h3>
                        <p>{this.props.language.language.ale.description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className="blue-title">{this.props.language.language.ale.interests.music.title}</h4>
                        <p>{this.props.language.language.ale.interests.music.description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <p className="red-title-b">{this.props.language.language.ale.interests.music.bands.ases}</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="red-title-b">{this.props.language.language.ale.interests.music.bands.cristobal}</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="red-title-b">{this.props.language.language.ale.interests.music.bands.beatles}</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="red-title-b">{this.props.language.language.ale.interests.music.bands.oasis}</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="red-title-b">{this.props.language.language.ale.interests.music.bands.strokes}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className="blue-title">{this.props.language.language.ale.interests.videogames.title}</h4>
                        <p>{this.props.language.language.ale.interests.videogames.description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <p className="red-title-b">{this.props.language.language.ale.interests.videogames.videogames.lol}</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="red-title-b">{this.props.language.language.ale.interests.videogames.videogames.ragnarok}</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="red-title-b">{this.props.language.language.ale.interests.videogames.videogames.overwatch}</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="red-title-b">{this.props.language.language.ale.interests.videogames.videogames.pokemon}</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="red-title-b">{this.props.language.language.ale.interests.videogames.videogames.bioshock}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className="blue-title">{this.props.language.language.ale.interests.books.title}</h4>
                        <p>{this.props.language.language.ale.interests.books.description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <p className="red-title-b">{this.props.language.language.ale.interests.books.books.kafka}</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="red-title-b">{this.props.language.language.ale.interests.books.books.south}</p>
                    </div>
                    <div className="col-sm-4">
                        <p className="red-title-b">{this.props.language.language.ale.interests.books.books.tokio}</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default ViewAle;