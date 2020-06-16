import React, { Component } from 'react';

class Experience extends Component {
    render () {
        return (
            <section className="section-experience">
                <div className="bg-video">
                    <video className="bg-video-content" autoPlay muted loop>
                        <source src="../../../video/video.mp4" type="video/mp4"/>
                        <source src="../../../video/video.webm" type="video/webm"/>
                        Your browser is not supported!
                    </video>
                </div>
                <div className="u-center-text">
                    <h2 className="heading-secondary u-margin-bottom-big">
                        Experience
                    </h2>
                    <div className="row">
                        <div className="experience">
                            <figure className="experience-shape">
                                <img src="https://i.imgur.com/O4zgxRB.jpg" alt="General Assembly" className="experience-image-2"/>
                                <figcaption className="experience-caption">
                                    Hackaton
                                </figcaption>
                            </figure>
                            <div className="experience-text">
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    UX Design and Software Engineer Hackaton
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptate amet iure modi laborum obcaecati voluptates eveniet temporibus est saepe rerum repudiandae necessitatibus, dignissimos ipsam, accusantium, sint officiis magnam. Culpa.Eligendi ex suscipit impedit minima odit facere? Aliquid alias excepturi vitae doloribus quibusdam laudantium enim velit ea! Rem iste dicta officia assumenda ducimus sapiente, voluptatum cum vero, ab enim molestiae!</p>
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
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    Software Engineering Immersive Program
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim voluptate amet iure modi laborum obcaecati voluptates eveniet temporibus est saepe rerum repudiandae necessitatibus, dignissimos ipsam, accusantium, sint officiis magnam. Culpa.Eligendi ex suscipit impedit minima odit facere? Aliquid alias excepturi vitae doloribus quibusdam laudantium enim velit ea! Rem iste dicta officia assumenda ducimus sapiente, voluptatum cum vero, ab enim molestiae!</p>
                            </div>
                        </div>                    
                    </div>
                </div>
            </section>
        )
    }
}
export default Experience   