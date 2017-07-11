import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import data from '../common/cart.json';
import Editbar from './Editbar';
import Editmodal from './Editmodal';

export default class Product extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            showModal:false
        }

        this.displayModal=this.displayModal.bind(this);
        this.closeModal=this.closeModal.bind(this);
    }

    displayModal()
    {
        this.setState({showModal:true});
    }

    closeModal()
    {
        this.setState({showModal:false});
    }

    render()
    {
        let productsName=[];
        let productsSize=[];
        let productsQuantity=[];
        
            let pStyle=this.props.data.p_style;
            pStyle=pStyle.toUpperCase();

            let pName=this.props.data.p_variation.concat(" ", this.props.data.p_name);
            pName=pName.toUpperCase();

            let pColor= this.props.data.p_selected_color.name;
            let firstChar=pColor.slice(0,1).toUpperCase();
            pColor=firstChar.concat(pColor);

            productsName.push(<div><div><strong>{pName}</strong></div>
                        <div>Style #: {pStyle}</div>
                        <div>Color : {pColor}</div>
                        <Editbar displayModal={this.displayModal} closeModal={this.closeModal}/></div>)
            productsSize.push(<div>{this.props.data.p_selected_size.name}</div>)
            productsQuantity.push(<div><input type="text" value={this.props.data.p_quantity}/></div>)
       

        
        return(
            <div className="row">
                <div className="col-sm-3 col-md-3 col-lg-3">
                    <img src="../../images/T1.jpg" alt="productimage"/>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">{productsName}</div>
                <div className="col-sm-2 col-md-2 col-lg-2">{productsSize}</div>
                <div className="col-sm-2 col-md-2 col-lg-2">{productsQuantity}</div>
                <div className="col-sm-2 col-md-2 col-lg-2">PRICE</div>
                <Editmodal showModal={this.state.showModal} closeModal={this.closeModal} />
            </div>
           
        )
    }
}