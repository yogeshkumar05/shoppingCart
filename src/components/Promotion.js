import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Promotion extends Component
{
    constructor(props)
    {
        super(props);
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
                    <input type="text"/>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                    <button>Apply</button>
                </div>
            </div>
        )
    }
}