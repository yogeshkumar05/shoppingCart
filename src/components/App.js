import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Cart from './Cart';
export default class App extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="app">
                <Header/>
                <hr/>
                <Cart/>
            </div>
        )
    }
}