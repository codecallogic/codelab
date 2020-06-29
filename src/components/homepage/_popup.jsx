import React, { Component } from 'react';

class PopUp extends Component {
    render () {
        return (
            <div>
                <div className="popup" id="popup-mloops">
                    <div className="popup-content">
                        <div className="popup-left">
                            <img src="https://i.imgur.com/QII5QSq.png" alt="" className="popup-img"/>
                            <img src="https://i.imgur.com/u1wEOBr.png" alt="" className="popup-img"/>
                        </div>
                        <div className="popup-right">
                            <a href="#section-projects" className="popup-close">&times;</a>
                            <h2 className="heading-secondary u-margin-bottom-medium">About</h2>
                            <h3 className="heading-tertiary u-margin-bottom-small">A MongoDB, Express, and Node JS Stack App</h3>
                            <p className="popup-text">
                                mLoops givs you access to Spotify's millions of songs and curated playlists. Users can create posts related to their music search based on tags. They can also provide comments on other posts created by other users. Other features of the app includes data of a tracks popularity on a 0 to 100 scale, a link to play the song, and a beta functionality to analyze each audio track which describes the track’s structure and musical content, including rhythm, pitch, and timbre. All information is precise to the audio sample.
                            </p>
                            <a href="https://mloops.herokuapp.com/" target="_blank" className="btn btn--primary">Visit</a>
                        </div>
                    </div>
                </div>
                <div className="popup" id="popup-recovery">
                    <div className="popup-content">
                        <div className="popup-left">
                            <img src="https://i.imgur.com/VV0lnAY.png" alt="" className="popup-img"/>
                            <img src="https://i.imgur.com/iwduPJv.png" alt="" className="popup-img"/>
                        </div>
                        <div className="popup-right">
                            <a href="#section-projects" className="popup-close">&times;</a>
                            <h2 className="heading-secondary u-margin-bottom-medium">About</h2>
                            <h3 className="heading-tertiary u-margin-bottom-small">A Django and Python Web App</h3>
                            <p className="popup-text">
                                A medical, health, and wellness app built with patient recovery process in mind.

                                When a user logs in, they are able to select symptoms and receive possible diagnoses. With a diagnosis, they are able to create customized trackers to monitor things such as symptom ratings, nutrition intake, weight, exercise, or anything else they would like. This is done by adding numeric values which are then presented to the user via a line graph.
                            </p>
                            <a href="https://recovery-tracker-app.herokuapp.com/" target="_blank" className="btn btn--primary">Visit</a>
                        </div>
                    </div>
                </div>
                <div className="popup" id="popup-instatone">
                    <div className="popup-content">
                        <div className="popup-left">
                            <img src="https://i.imgur.com/5vH5zbX.png" alt="" className="popup-img"/>
                            <img src="https://i.imgur.com/74UxODJ.png" alt="" className="popup-img"/>
                        </div>
                        <div className="popup-right">
                            <a href="#section-projects" className="popup-close">&times;</a>
                            <h2 className="heading-secondary u-margin-bottom-medium">About</h2>
                            <h3 className="heading-tertiary u-margin-bottom-small">A MongoDB, Express, React, and Node JS Stack App</h3>
                            <p className="popup-text">
                                A real time mini basic digital work station.

                                When a user logs in, they are able to configure the the type of synth they would like to use from a list of default synths provided. With customizable settings the user can generate a unique sound to their liking. In the tune room the user will have a piano displayed where they will be able to play music with others logged on in real time.
                            </p>
                            <a href="https://instatone.herokuapp.com/" target="_blank" className="btn btn--primary">Visit</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PopUp