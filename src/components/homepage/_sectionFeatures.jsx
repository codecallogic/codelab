import React, { Component } from 'react';

class Features extends Component {
    render () {
        return (
            <section id="section-features" className="section-features">                
                <div className="row section-features-row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box-icon icon-basic-world"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">API Applications</h3>
                            <p className="feature-box-text">
                                One of the great things about API's are objects which store and organize data neatly. Think of it like a bookself where all the data supplied is organized in rows and columns. But the main benefit is that API's allow companies to share information. Below this section you can see I use Spotify's api to list some songs.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box-icon icon-basic-server-cloud"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">AWS Cloud Storage</h3>
                            <p className="feature-box-text">
                                Amazon provides a cloud storage service that keeps your data safe, secure, and available when needed. You can add or remove your data on demand, no need for hardware purchase. This allows for easier storage management, and powerful information management. I use S3 mainly for scalabiility.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box-icon icon-basic-tablet"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Responsive Design</h3>
                            <p className="feature-box-text">
                                Modern css allows websites and pages to render on all devices and screen sizes much easier today. Wether its a desktop, laptop, tablet, or smartphone, responsive designs will adapt to any screen. For example, this is site completely responsive, also for scalability and efficiency I use Sass to process my css.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i className="feature-box-icon icon-basic-clock"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Real Time Connections</h3>
                            <p className="feature-box-text">
                                Real Time web apps use constant communication to update information as soon as its published by a user. Most updates are considered to be immediate or current close to real time. I'm familier with using socket.io to provide instant communication whether its a message, file, or a tune, socket.io helps delivery in seconds.
                            </p>
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }
}
export default Features