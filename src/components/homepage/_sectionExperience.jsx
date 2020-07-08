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
                                <p> Awarded the Best Scrum Team for Design and Implementation of a Concept App. Worked with a team of UX Designers and Developers to showcase our solution to a civic challenge. The case involved making an app that contributes to civic engagement. Worked in an environment that was entirely remote using applications such as Zoom, Slack, Trello, ect. for communication.</p>
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
                                    JAN 2020 - April 2020
                                </h3>
                                <p>Engaged in a three month-long full-time coding bootcamp with over 10,000 lines of code uploaded on servers and stored on GIT. Strong workflow under pressure and a persistant work ethic to meet modern web application standards. Gained foundational knowledge and the confidence to build fast and current in demand applications that before I would only imagine. I learned the lastest technologies and practices required in the tech industry.</p>
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
                                    Dec 2018 - September 2019
                                </h3>
                                <a className="experience-link u-margin-bottom-small" href="https://housecleaning4you.com/" target="_blank">All Clean 4 You</a>
                                <p>An eco-friendly company focused on creating healthier homes with a cleaning staff with 10+ of experience. Developed a custom web app, led front and backend integrations, and managed the design for customer engagement on the platform. Built the platform on a PHP and MySQL language. Familiar with CMS systems like WordPress. Integrated PayPal and stripe payment gateways, and appointment booking system Cleanto.</p>                                
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