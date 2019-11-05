import React, { Component, Fragment } from 'react';
import PrdouctDescription from '../../components/PrdouctDescription';
import PrdouctDetails from '../../components/PrdouctDetails';
import ImageUrl from '../../assets/cbd-oil.png';
import ProductPageImageUrl from '../../assets/product-page.png';
import './Bene.css';


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
                                <img src={ImageUrl} alt="oil-bottle" height="500" width="500" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 text-left">
                                <PrdouctDescription
                                    title={'CBD Isolate 500 MG'}
                                    subTitle={'Super powered by hemp isolate'}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-details">
                    <div className="d-flex">
                        <div className="col-lg-6 col-md-6 col-sm-12 data">
                            <PrdouctDetails
                                title={'CBD Isolate Oil from Premium, Organically Grown Hemp, To Create the Purest CBD '}
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 p-0 image-section">
                            <img src={ProductPageImageUrl} alt="oil-bottle"/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}