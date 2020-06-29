import React, { Component } from 'react';

class Projects extends Component {
    render () {
        return (
            <section className="section-projects" id="section-projects">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Recent Projects
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card-side card-side-front">
                                <div className="card-picture card-picture-1"></div>
                                <h4 className="card-heading">
                                    <span className="card-heading-span card-heading-span-1">
                                        mLoops Spotify Explorer
                                    </span>
                                </h4>
                                <div className="card-details">
                                    <ul>
                                        <li>Desktop Version Only</li>
                                        <li>Uses Spotify API</li>
                                        <li>Integrated Rich Text Editor</li>
                                        <li>OAuth Security</li>
                                        <li>Dashboard for Posts</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-side card-side-back card-side-back-1">
                                <div className="card-cta">
                                    <div className="card-details-box">
                                        <p className="card-details-title">Search</p>
                                        <p className="card-details-sub-title">Popular Music and Blog About Your Favorite Topics</p>
                                        <a href="#popup-mloops" className="btn btn--white">Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card-side card-side-front">
                                <div className="card-picture card-picture-2"></div>
                                <h4 className="card-heading">
                                    <span className="card-heading-span card-heading-span-2">
                                        Assessment Symptom Checker
                                    </span>
                                </h4>
                                <div className="card-details">
                                    <ul>
                                        <li>Desktop Version Only</li>
                                        <li>Uses Infermedica AI API</li>
                                        <li>Implements Chart JS</li>
                                        <li>Django and Python Framework</li>
                                        <li>Tracking Functionality</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-side card-side-back card-side-back-2">
                                <div className="card-cta">
                                    <div className="card-details-box">
                                        <p className="card-details-title">Diagnosis</p>
                                        <p className="card-details-sub-title">Based on Your Symptoms</p>
                                        <a href="#popup-recovery" className="btn btn--white">Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card-side card-side-front">
                                <div className="card-picture card-picture-3"></div>
                                <h4 className="card-heading">
                                    <span className="card-heading-span card-heading-span-3">
                                        Instatone
                                    </span>
                                </h4>
                                <div className="card-details">
                                    <ul>
                                        <li>Desktop Version Only</li>
                                        <li>React Piano Library</li>
                                        <li>Socket.io Real Time Technology</li>
                                        <li>Implements JWT's</li>
                                        <li>Utilizes Tone.js for Music</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-side card-side-back card-side-back-3">
                                <div className="card-cta">
                                    <div className="card-details-box">
                                        <p className="card-details-title">Play</p>
                                        <p className="card-details-sub-title">Music In Real Time With Others</p>
                                        <a href="#popup-instatone" className="btn btn--white">Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="u-center-text u-margin-top-big section-projects-links">
                    {/* <a href="/#" className="btn-text u-margin-bottom-medium">See More</a> */}
                    <a href="https://github.com/codecallogic" className="btn-text" target="_blank">Git Hub &rarr;  <i className="fab fa-github"></i></a>
                </div>
            </section>
        )
    }
}
export default Projects