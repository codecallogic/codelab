import React, { Component } from 'react';

class CustomGrid extends Component {
    render () {
        return (
            <div>
                <section className="grid-test">
                <div className="row">
                    <div className="col-1-of-1">col 1 of 1 </div>
                </div>
                <div className="row">
                    <div className="col-1-of-2">col 1 of 2 </div>
                    <div className="col-1-of-2">col 1 of 2 </div>
                </div>
                <div className="row">
                    <div className="col-1-of-3">col 1 of 3</div>
                    <div className="col-1-of-3">col 1 of 3</div>
                    <div className="col-1-of-3">col 1 of 3</div>
                </div>
                <div className="row">
                    <div className="col-1-of-3">Col 1 of 3</div>
                    <div className="col-2-of-3">Col 2 of 3</div>
                </div>
                <div className="row">
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-1-of-4">Col 1 of 4</div>
                </div>
                <div className="row">
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-2-of-4">Col 2 of 4</div>                
                </div>
                <div className="row">
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-3-of-4">Col 3 of 4</div>
                </div>
                <div className="row">
                    <div className="col-1-of-4">Col 1 of 4</div>
                    <div className="col-3-of-4">Col 3 of 4</div>
                </div>
                <div className="row">
                    <div className="col-1-of-8">Col 1 of 8</div>
                    <div className="col-7-of-8">Col 7 of 8</div>
                </div>
            </section>
            </div>
        )
    }
}
export default CustomGrid