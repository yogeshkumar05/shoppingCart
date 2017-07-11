import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import data from '../common/cart.json';
import Infobar from './Infobar';
import Product from './Product';
import Queries from './Queries';
import Promotion from './Promotion';
import Total from './Total';
import Checkoutbar from './Checkoutbar';

export default class Cart extends Component
{
    constructor(props)
    {
        super(props);
        console.info(JSON.stringify(data))
      //  alert(data.productsInCart.length)
    }

    render()
    {
        let products=[];
        data.productsInCart.map((item,index)=>
        {
            products.push(<div><Product data={item}/> <hr/></div>)
        });

        return(
            <div>
                <div className="infobar">
                    <Infobar/>
                </div>
                <div className="horizontalLine"></div>
                {products}
                <div className="row">
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <Queries/>
                    </div>
                    <div className="col-sm-9 col-md-9 col-lg-9">
                        <Promotion/>
                        <div className="horizontalLine"></div>
                        <Total/>
                        <div className="horizontalLine"></div>
                        <Checkoutbar/>
                        
                    </div>

                    
                </div>
            </div>
        )
    }
}