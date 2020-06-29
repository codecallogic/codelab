import React, { Component } from 'react';

class Homepage extends Component {
    render () {
        return (
            <section id="section-about" className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    My Favorite Technologies
                </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-small">
                            Some of my favorite apps are built on a MERN stack framework
                        </h3>
                        <p className="paragraph">MERN stacks means using Mongoose, Express, React JS, and Node JS programming languages to build an application. React JS is known for its compononent structure and its fast rendering performance, instagram is based entirely on React. Its one of my top programming languages to build websites, in fact this site is built entirely a MERN framework.</p>

                        <h3 className="heading-tertiary u-margin-small">
                            Django Framework For Python
                        </h3>
                        <p className="paragraph">Django is my go to framework for a python based application. Although there is a lot to learn form Djangos huge fully-featured library its model-view-template architeture makes it designing applications pragmatic and internal admin interface automatic.</p>

                        <h3 className="heading-tertiary u-margin-small">
                            MEN Stack Apps with future MEAN stack development
                        </h3>
                        <p className="paragraph">MEN is known for using Mongoose, Express, and Node JS with no front-end framework. Its a good way to build an application without strict rules and guidelines to follow making it more flexible but a little harder to maintain organized. </p>

                        <a href="https://github.com/codecallogic" className="btn-text" target="_blank">Git Hub &rarr;  <i className="fab fa-github"></i></a>

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