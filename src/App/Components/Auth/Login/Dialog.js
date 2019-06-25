import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
let dialogStyle = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '26.6%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#FFBABA',
    padding: '10px 20px 40px',
    borderRadious: '8px',
    display: 'flex',
    flexDireaction: 'column',

};

let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadious: '20px',
    width: '60px',
    height: '60px',
    alignSelf: 'flex-end',
    backgroundColor: '#0000FF',
    color: 'FFFFFF',
}

class Dialog extends Component {
    constructor() {
        super(


        )
    }

    _onClose = () => {
        this.props.onHide();
        console.log("onClose Press")
    }

    render() {
        const { isOpen, children } = this.props;
        console.log(isOpen)
        if (!isOpen) return null;
        return (
            <div>
                Hiii
                <Modal

                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modal heading
          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                            ac consectetur ac, vestibulum at eros.
          </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this._onClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>



        )


    }
}
export default Dialog;