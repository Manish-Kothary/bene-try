import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class PrdouctDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { title, subTitle } = this.props;
        return (
            <div className="">
                <h3 className="product-title">
                    {title} 
                </h3>
                <p className="product-subtitle">{subTitle}</p>
                <div className="product-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="row py-3 detail">
                    <div className="col-lg-4">
                        <h5 className="label">What is it?</h5>
                    </div>
                    <div className="col-lg-8 detail-col">
                        <p>A safe start to CBD expereience, especially for those who prefer softge!</p>
                    </div>
                </div>
                <div className="row py-3 detail">
                    <div className="col-lg-4">
                        <h5 className="label">All ingredients</h5>
                    </div>
                    <div className="col-lg-8 detail-col">
                        <p>99% pure broad Spectrum CBD Isolate Natural (No added flavor).</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between py-5">
                    <Button id="addToCartBtn" variant="outline-dark">Add to Cart</Button>
                    <h3>$ 45</h3>
                    <h3>- 1 +</h3>
                </div>
            </div>
        )
    }
}