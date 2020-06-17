import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <footer className="footer">
                <div className="footer-logo-box">
                    <img src="https://i.imgur.com/TIDi3Mb.png" alt="Footer Logo" className="footer-logo"/>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="footer-navigation">
                        <ul className="footer-list">
                            <li className="footer-item"><a href="#" className="footer-link">Projects</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Projects</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Projects</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Projects</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Projects</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Projects</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <p className="footer-copyright">
                            Built by <a href="" className="footer-link">Fabricio Guardia </a> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, consequuntur vel? Obcaecati soluta excepturi id aspernatur, perspiciatis consectetur alias eum quas asperiores accusamus amet error iure, pariatur, ratione nulla cupiditate?
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer