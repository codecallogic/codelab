import React, { Component } from 'react';

class PopUp extends Component {
    render () {
        return (
            <popup className="popup">
                <div className="popup-content">
                    <div className="popup-left">
                        <img src="https://i.imgur.com/QII5QSq.png" alt="" className="popup-img"/>
                        <img src="https://i.imgur.com/u1wEOBr.png" alt="" className="popup-img"/>
                    </div>
                    <div className="popup-right">
                        <h2 className="heading-secondary u-margin-bottom-medium">About</h2>
                        <h3 className="heading-tertiary u-margin-bottom-small">A MongoDB, Express, Node JS Stack App</h3>
                        <p className="popup-text">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor asperiores quibusdam ex, doloribus, neque porro impedit pariatur minima omnis ipsa eos expedita necessitatibus magnam, libero consectetur dolores animi et accusamus!Temporibus sed harum veritatis voluptates illum nobis, explicabo deserunt magnam beatae. Amet, odit iusto! Aperiam maiores ipsa asperiores repudiandae? Quia quibusdam odit dolores cum aut porro harum perferendis! Accusantium, fugiat?
                        </p>
                        <a href="" className="btn btn--primary">Visit</a>
                    </div>
                </div>
            </popup>
        )
    }
}
export default PopUp