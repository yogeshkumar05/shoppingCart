import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import data from '../common/cart.json';
import Infobar from './Infobar';
import Product from './Product';
import Queries from './Queries';
import Promotion from './Promotion';
import Total from './Total';
import Checkoutbar from './Checkoutbar';
import coupons from '../common/coupons.json';
import { calculateSubTotal, calculateDiscount } from '../util/utilFunctions';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        console.info(JSON.stringify(data))
        this.state = {
            subTotal:0,
            discount: 0,
            coupon: "",
            total:0
        }
        this.calculateSubTotal=this.calculateSubTotal.bind(this);
        this.calculateDiscount=this.calculateDiscount.bind(this);
    }

    calculateSubTotal(input) 
    {
        
    }

    calculateDiscount(code, subTotal) {
        
        let couponsArray = coupons.coupons;
        let couponsPercent = 0;
        let discount = 0;

        couponsArray.map((item, index) => {
            if (item.code === code) {
                couponsPercent = Number(item.discountPercent);
            }

        });

        console.log(typeof couponsPercent)
        discount = (couponsPercent / 100) * Number(subTotal);
              //let total= subTotal - discount;
        discount=Math.round(discount * 100) / 100;

        this.setState({discount, coupon:code});
    }

    
  

  

    

    render() {
        let products = [];
        let prices = [];
        data.productsInCart.map((item, index) => {
            if (index === data.productsInCart.length - 1)
                products.push(<div><Product data={item} index={index} /> </div>)
            else
                products.push(<div><Product data={item} index={index} /> <hr /></div>)

            prices.push(item.p_originalprice);
        });

        let sum = 0;
        let subTotal=0;
        for (let i in prices) {
            sum += prices[i];
        }

        subTotal=sum;
        let total=subTotal-this.state.discount;


        return (
            <div>
                <div className="info-bar">
                    <Infobar />
                </div>
                <div className="horizontalLine"></div>
                <div>{products}</div>
                <div className="horizontalLine"></div>
                <div className="row totalSection">
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <Queries />
                    </div>
                    <div className="col-sm-9 col-md-9 col-lg-9">
                        <Promotion subTotal={subTotal} calculateDiscount={this.calculateDiscount} />
                        <div className="horizontalLine"></div>
                        <Total coupon={this.state.coupon} discount={this.state.discount} 
                                total={total} subTotal={subTotal}/>
                        <div className="horizontalLine"></div>
                        <Checkoutbar />
                    </div>
                </div>
            </div>
        )
    }
}