import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Queries extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <div><strong>Need help</strong></div>
                <div><strong>or have questions?</strong></div>
                <div className="queriesSection">Call Customer Service at</div>
                <div>1111-1111-1111</div>
                <a href="">
                    <div className="queriesSection"><u>Chat with one of</u></div>
                    <div><u>our stylists</u></div>
                </a>
                <a href="">
                    <div className="queriesSection"><u>See Return</u></div>
                    <div><u>& exchange policy</u></div>
                 </a>
            </div>
               
        )
    }
}