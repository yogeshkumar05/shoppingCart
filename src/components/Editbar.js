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
            <div >
                <span className="edit-item" onClick={this.props.displayModal}>EDIT</span>
                <span className="verticalLine">|</span>
                <span>X REMOVE</span> 
                <span className="verticalLine">|</span>
                <span>SAVE FOR LATER</span>
            </div>
        )
    }
}