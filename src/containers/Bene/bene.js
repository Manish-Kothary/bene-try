import React, { Component, Fragment } from 'react';
import './bene.css';
import { Button } from 'react-bootstrap';

export default class Bene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <Fragment>
                <div className="main">
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h3 className="product-title">
                                    CBD Isolate 500 MG 
                                </h3>
                                <p>Super powered by hemp isolate</p>
                                <div className="product-description">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <div className="row py-2 detail">
                                    <div className="col-lg-4">
                                        <h5>What is it?</h5>
                                    </div>
                                    <div className="col-lg-8">
                                        <p>A safe start to CBD expereience, especially for those who prefer softge!</p>
                                    </div>
                                </div>
                                <div className="row py-2 detail">
                                    <div className="col-lg-4">
                                        <h5>All ingredients</h5>
                                    </div>
                                    <div className="col-lg-8">
                                        <p>99% pure broad Spectrum CBD Isolate Natural (No added flavor).</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between py-3">
                                    <Button variant="outline-dark">Add to Cart</Button>
                                    <h3>$ 45</h3>
                                    <h3>- 1 +</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-details">
                    <div className="d-flex">
                        <div className="col-lg-6 col-md-6 col-sm-12 py-5 px-3">
                        <h3 className="px-4">
                            CBD Isolate Oil from Premium, Organically Grown Hemp, To Create the Purest CBD 
                        </h3>
                        <div className="container-fluid">
                            <div className="row py-2 detail">
                                <div className="col-lg-4">
                                    <h5>Use daily</h5>
                                </div>
                                <div className="col-lg-8 detail-col">
                                    <p>99% pure broad Spectrum CBD Isolate Natural (No added flavor).</p>
                                </div>
                            </div>
                            <div className="row py-2 detail">
                                <div className="col-lg-4">
                                    <h5>How to Store</h5>
                                </div>
                                <div className="col-lg-8 detail-col">
                                    <p>99% pure broad Spectrum CBD Isolate Natural (No added flavor).</p>
                                </div>
                            </div>
                            <div className="row py-2 detail">
                                <div className="col-lg-4">
                                    <h5>Did you know?</h5>
                                </div>
                                <div className="col-lg-8 detail-col">
                                    <p>99% pure broad Spectrum CBD Isolate Natural (No added flavor).</p>
                                </div>
                            </div>
                            <div className="row py-2">
                                <div className="col-lg-4">
                                    <h5>THC</h5>
                                </div>
                                <div className="col-lg-8 detail-col">
                                    <p>99% pure broad Spectrum CBD Isolate Natural (No added flavor).</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 image-section">
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}