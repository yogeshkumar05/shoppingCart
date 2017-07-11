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

            let pSize=this.props.data.p_selected_size.code;
            pSize=pSize.toUpperCase();

            let textStyle={"width":"40px"};


            let pOriginalPrice="";
            if(this.props.data.p_originalprice)
            pOriginalPrice=this.props.data.p_originalprice;

            let pSellingPrice=this.props.data.p_price;
            let pCurrency=this.props.data.c_currency;
           
            let productsPrice=[];

            let imgSrc="";
            if(this.props.index===0)
            {
                imgSrc="../../images/T1.jpg";

            }
            if(this.props.index===1)
            {
                imgSrc="../../images/T2.jpg";

            }
            if(this.props.index===2)
            {
                imgSrc="../../images/T3.jpg";

            }
            if(this.props.index===3)
            {
                imgSrc="../../images/T4.jpg";

            }

            
            let productsImage=[];
            productsImage.push(
                <img src={imgSrc} alt="productimage"/>
            )

            productsName.push(
                    <div>
                        <div>
                            <strong>{pName}</strong>
                        </div>
                        <div>Style #: {pStyle}</div>
                        <div>Color : {pColor}</div>
                        <Editbar displayModal={this.displayModal} closeModal={this.closeModal}/>
                    </div>
                );
            productsSize.push(<div>{pSize}</div>)
            productsQuantity.push(<div ><input style={textStyle} type="text" value={this.props.data.p_quantity}/></div>)
            
            if(pOriginalPrice!==pSellingPrice)
            {
                productsPrice.push(
                    <div>
                        <div>{pCurrency}<strike> {pOriginalPrice} </strike></div>
                        <div>{pCurrency} {pSellingPrice}</div>
                    </div>
                );
            }
            else
            {
                productsPrice.push(
                    <div>
                        <div>{pCurrency} {pSellingPrice}</div>
                    </div>
                );
            }

             let productDetails={
                "pStyle":pStyle,
                "pName":pName,
                "pColor":pColor,
                "pSize":pSize,
                "pOriginalPrice":pOriginalPrice,
                "pImgSrc":imgSrc
            };

        
        return(
            <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-2">
                    {productsImage}
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">{productsName}</div>
                <div className="col-sm-2 col-md-2 col-lg-2">{productsSize}</div>
                <div className="col-sm-2 col-md-2 col-lg-2">{productsQuantity}</div>
                <div className="col-sm-2 col-md-2 col-lg-2">{productsPrice}</div>
                <Editmodal data={productDetails} showModal={this.state.showModal} closeModal={this.closeModal} />
            </div>
           
        )
    }
}