import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Total extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        SUBTOTAl
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        $37.05
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        PROMOTION CODE JF10 APPLIED
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        -7.00
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div>ESTIMATED SHIPPING<sup>*</sup></div>
                        <div>You qualify for free shipping</div>
                        <div>because your order is over $50<sup>*</sup></div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                       FREE
                    </div>
                </div>
                <hr/>
                 <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div>ESTIMATED TOTAL</div>
                        <div>Tax will be applied during checkout</div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        $30.07
                    </div>
                </div>

            </div>
        )
    }
}