import React, { Component } from 'react';

export default class PrdouctDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { title } = this.props;
        return (
            <div className="data">
                <h3 className="px-4 py-5">
                    {title}
                </h3>
                <div className="container-fluid">
                    <div className="row py-3 detail">
                        <div className="col-lg-4">
                            <h5 className="label">Use daily</h5>
                        </div>
                        <div className="col-lg-8 detail-col">
                            <p>99% pure broad Spectrum CBD Isolate Natural (No added flavor).</p>
                        </div>
                    </div>
                    <div className="row py-3 detail">
                        <div className="col-lg-4">
                            <h5 className="label">How to Store</h5>
                        </div>
                        <div className="col-lg-8 detail-col">
                            <p>99% pure broad Spectrum CBD Isolate Natural (No added flavor).</p>
                        </div>
                    </div>
                    <div className="row py-3 detail">
                        <div className="col-lg-4">
                            <h5 className="label">Did you know?</h5>
                        </div>
                        <div className="col-lg-8 detail-col">
                            <p>99% pure broad Spectrum CBD Isolate Natural (No added flavor).</p>
                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-lg-4">
                            <h5 className="label">THC</h5>
                        </div>
                        <div className="col-lg-8 detail-col">
                            <p>99% pure broad Spectrum CBD Isolate Natural (No added flavor).</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}