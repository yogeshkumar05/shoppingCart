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
                <Modal show={this.props.showModal} >
                   <div onClick={this.props.closeModal}>X</div>
                    <Modal.Body>
                        EDIT MODAL
                    </Modal.Body>
                    
                </Modal>
            </div>
        )
    }
}