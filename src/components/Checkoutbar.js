import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Checkoutbar extends Component
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
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        CONTINUE SHOPPING
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <button>CHECKOUT</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2 col-md-2 col-lg-2">
                        
                    </div>
                    <div className="col-sm-10 col-md-10 col-lg-10">
                        Secure chckout. Shopping is always safe & secure
                    </div>
                    
                </div>
            </div>
        )
    }
}