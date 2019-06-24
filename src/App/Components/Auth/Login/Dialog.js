import React, { Component } from 'react';

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
    _onClose = () => {
        this.props.onClose();
    }

    render() {
        const { isOpen, children } = this.props;
        console.log(isOpen)
        if (!isOpen) return null;
        return (
            <div style={dialogStyle}>
                <p>{children}</p> <br />
                <button onClick={this._onClose}
                    style={dialogCloseButtonStyles}>Login Again</button>
            </div>
        )


    }
}
export default Dialog;