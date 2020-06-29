import React, { Component } from 'react';

class Experience extends Component {
    render () {
        return (
            <section className="section-experience" id="section-resume">
                <div className="bg-video">
                    <video className="bg-video-content" autoPlay muted loop>
                        <source src="../../../video/video.mp4" type="video/mp4"/>
                        <source src="../../../video/video.webm" type="video/webm"/>
                        Your browser is not supported!
                    </video>
                </div>
                    <div className="u-center-text">
                    <h2 className="heading-secondary u-margin-bottom-big u-center-text">
                        Resume
                    </h2>
                    </div>
                    <div className="row">
                        <div className="experience">
                            <figure className="experience-shape">
                                <img src="https://i.imgur.com/O4zgxRB.jpg" alt="General Assembly" className="experience-image-2"/>
                                <figcaption className="experience-caption">
                                    Hackaton
                                </figcaption>
                            </figure>
                            <div className="experience-text">
                                <h3 className="heading-tertiary">
                                    UX Design and Software Engineer Hackaton
                                </h3>
                                <h3 className="heading-fourth u-margin-bottom-small">
                                    April 2020
                                </h3>
                                <p>Won the hackaton with team of UX Designers and Developers to showcase our solution to a civic challenge. The case involved making app that contributes to civic engagement which essentially means promoting the quality of life in a community, through both political and non-political processes. This was entirely remote during the covid-19 crisis.</p>
                            </div>
                        </div>                    
                    </div>
                    <div className="row">
                        <div className="experience">
                            <figure className="experience-shape">
                                <img src="https://i.imgur.com/lMOgqYo.png" alt="General Assembly" className="experience-image"/>
                                <figcaption className="experience-caption">
                                    SEI
                                </figcaption>
                            </figure>
                            <div className="experience-text">
                                <h3 className="heading-tertiary">
                                    Fulltime - Software Engineering Immersive Program                                    
                                </h3>
                                <h3 className="heading-fourth u-margin-bottom-small">
                                    Feb 2020 - April 2020
                                </h3>
                                <p>Over a period three months I went through a rigorous course of software web development. It's giving me the foundational knowledge and confidence to build web apps and pursue ideas in a pragmatic approach that before I would only imagine. I learned the lastest technologies and practices required in tech industry.</p>
                            </div>
                        </div>                    
                    </div>
                    <div className="row">
                        <div className="experience">
                            <figure className="experience-shape">
                                <img src="https://i.imgur.com/DxLH5RC.jpg" style={{transform: 'translateY(2rem)scale(.8)'}}alt="All Clean 4 You" className="experience-image"/>
                                <figcaption className="experience-caption">
                                    AC4Y
                                </figcaption>
                            </figure>
                            <div className="experience-text">
                                <h3 className="heading-tertiary">
                                    Fulltime - Startup All Clean 4 You
                                </h3>
                                <h3 className="heading-fourth">
                                    Dec 2018 - November 2019
                                </h3>
                                <a className="experience-link u-margin-bottom-small" href="https://housecleaning4you.com/" target="_blank">All Clean 4 You</a>
                                <p>All Clean 4 You is company focused on digital solutions to home cleaning. Joined as a developer and creative problem solver, later on it sometimes involved taking care of aspects of the business, such as logo design, outsourcing, familiarizing with CMS systems like Wordpress. Integrated paypal and stripe payment gateways, and apointment booking system Cleanto. Played many cards at the time, the company had a heavy focus on PHP and MySQL.</p>                                
                            </div>
                        </div>                    
                    </div>
                    <div className="row">
                        <div className="experience">
                            <figure className="experience-shape">
                                <img src="https://i.imgur.com/0XlSCHt.png" style={{transform: 'translateY(2rem)scale(1.5)'}}alt="All Clean 4 You" className="experience-image"/>
                                <figcaption className="experience-caption">
                                    PHP
                                </figcaption>
                            </figure>
                            <div className="experience-text">
                                <h3 className="heading-tertiary">
                                    First Self-Taught Programming Language
                                </h3>
                                <h3 className="heading-fourth">
                                    FEB - 2018
                                </h3>
                                <p>PHP was a fun programming language to learn along with javascript, html, and css. I got my first exposure to the enthralling process of catching a problem going through the steps to solving it. After a few months of trial and error, daily to hourly use of Google and Stackoverflow, I got a basic experience of forms and conditional formating. Soon after building my first terrible web app, I started to move into more efficient and communicty rich languages.</p>                                
                            </div>
                        </div>
                    </div>
                    <div className="u-margin-top-huge"></div>
            </section>
        )
    }
}
export default Experience   