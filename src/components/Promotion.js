import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {calculateSubTotal, calculateDiscount} from '../util/utilFunctions';
import {Button} from 'react-bootstrap';

export default class Promotion extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            couponText:""
        }

        this.handleCouponChange=this.handleCouponChange.bind(this);
        this.applyCoupon=this.applyCoupon.bind(this);
    }

    handleCouponChange(e)
    {
        this.setState({couponText:e.target.value})

    }

    applyCoupon()
    {
        this.props.calculateDiscount(this.state.couponText, this.props.subTotal);
    }

    render()
    {
        return(
            <div className="row">
                <div className="col-sm-3 col-md-3 col-lg-3">
                    <div>ENTER PROMOTION CODE</div>
                    <div>OR GIFT CARD</div>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                    <input type="text" value={this.state.couponText} onChange={this.handleCouponChange}/>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                    <Button bsStyle="default" onClick={this.applyCoupon}>Apply</Button>
                </div>
            </div>
        )
    }
}