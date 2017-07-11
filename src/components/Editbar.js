import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Editbar extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="editbar">
                <span className="verticalLine" onClick={this.props.displayModal}>EDIT</span> <span className="verticalLine">REMOVE</span> <span>SAVE FOR LATER</span>
            </div>
        )
    }
}