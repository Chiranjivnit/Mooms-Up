import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink, Redirect } from 'react-router-dom';
import "../Login/Login.css"
import LoginIcon from '../Login/LoginIcon';
import { connect } from 'react-redux';
// import Dialog from '../Login/Dialog';
import { Modal,  } from 'react-bootstrap';


class Signup extends Component {

    constructor(props) {
        super(props);
        let loggedIn = false
        this.state = {
            email: '',
            password: '',
            loginSucessData: [],
            error: [],
            fetching: [],
            loggedIn,
            isOpen: false , // adModalShow:false
            show:false
        }
    }

    handleClick = (e) => {

        e.preventDefault()
        const { email, password } = this.state;
        if (email === 'chiranjiv.r@spurtreetech.in' && password === 'spurtree') {
            localStorage.setItem("token", "fsfxhgf34bxba")
            this.setState({
                loggedIn: true
            })
        } else {
            console.log('ffff==>')
            this.setState({
                isOpen: true
            })
            this.handleShow();
            // window.alert('sorry email and password does not match')
        }
        console.log("Email Password" + this.state.email, this.state.password)
        // const payload = {
        //     email: this.state.email,
        //     password: this.state.password
        // }
        // this.props.fetchLogin(payload);
    }

    componentWillReceiveProps(nextprops) {
        const { logindata } = nextprops;
        if (logindata === !this.props.logindata) {
            this.setState({
                loginSucessData: logindata.loginSucessData,
                error: logindata.error,
                fetching: logindata.fetching
            })
        }
    }

    handleClose=() =>{
        this.setState({ show: false });
      }
    
      handleShow=()=> {
        this.setState({ show: true });
      }

    render() {
        // let addModalClose =()=>this.setState({addModalShow:false})
        console.log(this.props)
        if (this.state.loggedIn) {
            return <Redirect to="/Vaccine"></Redirect>
        }

        return (

            <div className="loginBox">

                <h1 className="h"> Welcome to Moms Up </h1>
                <h3 className="l"> Login to your Account</h3>
                <Container>
                    <form >
                        <TextField
                            className="input "
                            variant="outlined"
                            margin="normal"
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(event) => this.setState({ email: event.target.value })}
                        >
                        </TextField>
                        <br />
                        <TextField
                            className="input "
                            type="password"
                            variant="outlined"
                            margin="normal"
                            id="Password"
                            label="Password"
                            name="email"
                            autoComplete="Password"
                            autoFocus
                            onChange={(event) => this.setState({ password: event.target.value })}
                        >
                        </TextField>
                        <h4 className="forgot">Forgot Password ?</h4>
                    </form>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ width: "120px", height: "40px" }}
                        onClick={this.handleClick}
                    > Login </Button>

                    <h3 className="p"> or Login using</h3>
                    <LoginIcon />
                </Container>

                <h3 className="p">Don't have an account yet? <NavLink to="/Register">  Sign Up </NavLink> </h3> <br />
                <h3 className="continue">CONTINUE AS GUEST</h3>
                <div>
                    {/* {this.state.loginSucessData ? <Homepage /> : window.alert(this.state.error)} */}
                </div>
                {/* <Button variant="primary" onClick={this.handleShow}>
                
              </Button> */}
      
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Oops something went wrong</Modal.Title>
                </Modal.Header>
                <Modal.Body> Please check your email and password.</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.handleClose}>
                    Login Again
                  </Button>
                </Modal.Footer>
              </Modal>

                {/* <Dialog isOpen={this.state.isOpen} onHide={(e) => this.setState({ isOpen: false })}>
                    Oops You entered wrong email or password, Please check your email and password.
                  </Dialog> */}


                {/* <NavLink to="/Homepage"> Homepage </NavLink> */}

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        logindata: state.loginReducer.data,
        fetching: state.loginReducer.fetching,
        error: state.loginReducer.error
    };
};

export default connect(mapStateToProps, null)(Signup);