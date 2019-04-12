import React, { Component } from 'react';
import './modal.scss';

class Modal extends Component {
    render(){
        console.log(this.props);
        if(this.props.isOpen){
            return(
                <div className="ws-modal">
                    <div className="ws-modal-content">
                        {this.props.children}

                        <div className="ws-modal-actions center">
                            <button className="btn btn-large purple darken-2" onClick={this.props.close}>Okay</button>
                        </div>
                    </div>
                </div>
            );
        }

        return null;
    }
}

export default Modal;

