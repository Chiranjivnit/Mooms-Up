import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
 import "../Login/Login.css"
import LoginIcon from '../Login/LoginIcon';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleClick = (e) => {
        this.props.fetchLogin('dada');
        e.preventDefault()
        window.alert('Sorry Mr ' + this.state.email + ' Login page in undermaintenance, Thank you')
        console.log("Email Password" + this.state.email, this.state.password)

    }

    render() {
        console.log(this.props)
        return (
          
            <div className="loginBox">

                <h1 className="h"> Welcome to Moms Up </h1>
                <h3 className="h"> Login to your Account</h3>
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
                        <h4 className="forgot">FORGOT PASSWORD ?</h4>
                    </form>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ width: "120px", height: "40px" }}
                        onClick={this.handleClick}
                    > Login </Button>

                    <h3 className="p"> or Login using</h3>
                    <LoginIcon/>
                </Container>
              
                <h3 className="p">Don't have an account yet? <NavLink to="/Register">  SIGN UP </NavLink> </h3> <br />
                <h3 className="continue">CONTINUE AS GUEST</h3>
                <NavLink to="/Homepage"> Homepage </NavLink>

            </div>
        )
    }
}
export default Signup;