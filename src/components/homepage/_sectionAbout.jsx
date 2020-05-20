import React, { Component } from 'react';

class Homepage extends Component {
    render () {
        return (
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-8">
                <h2 className="heading-secondary">
                    My Favorite Projects
                </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary">
                            You're going to fall in love with mloop
                        </h3>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos animi et ex assumenda, iusto rem magnam dolore alias sed tempore?</p>
                    </div>
                    <div className="col-1-of-2">Images</div>
                </div>
            </section>
        )
    }
}
export default Homepage