import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Music extends Component {
    
    render () {
        return (
            <section className="section-music">
                <div className="row">
                    <div className="col-1-of-8">
                        <ul className="heading-side">
                            <li>M</li>
                            <li>U</li>
                            <li>S</li>
                            <li>I</li>
                            <li>C</li>
                        </ul>
                    </div>
                    <div className="col-7-of-8">
                        <div className="col-1-of-3">
                            <div className="section-music-recently-played">
                                <h3 className="heading-tertiary u-center-text">
                                    Recently Played Music
                                </h3>
                                <div className="section-music-track">
                                    <ul>
                                        <li>
                                            <img src="https://i.imgur.com/JhAR0AW.jpg" alt=""/>
                                            <span>El Sol Avenue</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                            Helloadfadsf
                        </div>
                        <div className="col-1-of-3">
                            Helloadfadsf
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Music