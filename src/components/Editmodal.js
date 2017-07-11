import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Modal, OverlayTrigger, Button, ButtonToolbar} from 'react-bootstrap';
export default class EditModal extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                <Modal show={this.props.showModal} bsSize="large">
                   <div onClick={this.props.closeModal}>X</div>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-sm-1 col-md-1 col-lg-1">
                            </div>
                            <div className="col-sm-5 col-md-5 col-lg-5">
                                <div className="horizontalLine"></div>
                                <div>{this.props.data.pName}</div>
                                <div>${this.props.data.pOriginalPrice}</div>

                            </div>
                            <div className="col-sm-1 col-md-1 col-lg-1">
                            </div>
                            <div className="col-sm-5 col-md-5 col-lg-5">
                                <img src={this.props.data.pImgSrc} alt="editP1"/>
                            </div>
                        </div>
                    </Modal.Body>
                    
                </Modal>
            </div>
        )
    }
}