import React, { Component } from 'react';

class Homepage extends Component {
    render () {
        return (
            <section id="section-about" className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Why I Enjoy Coding
                </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-small">
                            API's Are Awesome, You Get To Access Data From Some of Your Favorite Apps
                        </h3>
                        <p className="paragraph">mLoops allows access to Spotify's millions of songs and curated playlists. Users can create posts related to their music search using tags to categorize their posts. They can also provide comments on other posts created by other users. </p>

                        <h3 className="heading-tertiary u-margin-small">
                            Get An Assessment For Your Symptoms with Recovery
                        </h3>
                        <p className="paragraph">mLoops allows access to Spotify's millions of songs and curated playlists. Users can create posts related to their music search using tags to categorize their posts. They can also provide comments on other posts created by other users. </p>

                        <h3 className="heading-tertiary u-margin-small">
                            Make music together in real-time with Instatone
                        </h3>
                        <p className="paragraph">mLoops allows access to Spotify's millions of songs and curated playlists. Users can create posts related to their music search using tags to categorize their posts. They can also provide comments on other posts created by other users. </p>

                        <a href="https://github.com/codecallogic" className="btn-text" target="_blank">Learn More &rarr;  <i class="fab fa-github"></i></a>

                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src="https://i.imgur.com/UiZLqfN.png" alt="One" className="composition__photo composition__photo--p1"/>
                            <img src="https://i.imgur.com/zLl3xiv.png" alt="Tow" className="composition__photo composition__photo--p2"/>
                            <img src="https://i.imgur.com/Nkbk1wq.png" alt="Three" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Homepage