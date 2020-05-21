import React, { Component } from 'react';

class Homepage extends Component {
    render () {
        return (
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    My Favorite Projects
                </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-small">
                            You're going to fall in love with mloop
                        </h3>
                        <p className="paragraph">mLoops allows access to Spotify's millions of songs and curated playlists. Users can create posts related to their music search using tags to categorize their posts. They can also provide comments on other posts created by other users. </p>

                        <h3 className="heading-tertiary u-margin-small">
                            Get yourself a prechecked online with Recovery
                        </h3>
                        <p className="paragraph">mLoops allows access to Spotify's millions of songs and curated playlists. Users can create posts related to their music search using tags to categorize their posts. They can also provide comments on other posts created by other users. </p>

                        <h3 className="heading-tertiary u-margin-small">
                            Make music together in real-time with Instatone
                        </h3>
                        <p className="paragraph">mLoops allows access to Spotify's millions of songs and curated playlists. Users can create posts related to their music search using tags to categorize their posts. They can also provide comments on other posts created by other users. </p>

                        <a href="" className="btn-text">Learn More &rarr; </a>

                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src="https://i.imgur.com/UiZLqfN.png" alt="Photo 1" className="composition__photo composition__photo--p1"/>
                            <img src="https://i.imgur.com/zLl3xiv.png" alt="Photo 2" className="composition__photo composition__photo--p2"/>
                            <img src="https://i.imgur.com/Nkbk1wq.png" alt="Photo 3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Homepage