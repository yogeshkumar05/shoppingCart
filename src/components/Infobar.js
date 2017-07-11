import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import data from '../common/cart.json';

export default class Infobar extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="row">
                <div className="col-sm-3 col-md-3 col-lg-3">{data.productsInCart.length} Items</div>
                <div className="col-sm-3 col-md-3 col-lg-3"></div>
                <div className="col-sm-2 col-md-2 col-lg-2">Size</div>
                <div className="col-sm-2 col-md-2 col-lg-2">QTY</div>
                <div className="col-sm-2 col-md-2 col-lg-2">PRICE</div>
            </div>
        )
    }
}