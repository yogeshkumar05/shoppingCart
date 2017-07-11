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
        let promoText=[];
        if(this.props.discount<=0)
        {
            promoText.push(<div>NO VALID PROMOTION CODE APPLIED</div>);
        }
        else
        {
            promoText.push(<div>PROMOTION CODE <strong>{this.props.coupon}</strong> APPLIED</div>);
        }
        return(
            <div>
                <div className="row subTotalSection">
                    <div className="col-sm-6 col-md-6 col-lg-6 subTotal">
                        SUBTOTAL
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 subTotal">
                        ${this.props.subTotal}
                    </div>
                </div>

                <div className="row subTotalSection">
                    <div className="col-sm-6 col-md-6 col-lg-6 subTotal">
                       {promoText}
                       
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 subTotal">
                        -{this.props.discount}
                    </div>
                </div>

                <div className="row subTotalSection">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="subTotal">ESTIMATED SHIPPING<sup>*</sup></div>
                        <div>You qualify for free shipping</div>
                        <div>because your order is over $50<sup>*</sup></div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 subTotal">
                       FREE
                    </div>
                </div>
                <hr/>
                 <div className="row subTotalSection">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="totalText">ESTIMATED TOTAL</div>
                        <div>Tax will be applied during checkout</div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 totalText">
                        ${this.props.total}
                    </div>
                </div>

            </div>
        )
    }
}