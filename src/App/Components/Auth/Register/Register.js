import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../Login/Login.css'
import { NavLink } from 'react-router-dom';
import LoginIcon from '../Login/LoginIcon';
// import Checkbox from './Checkbox';



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            isChecked: false
        }
    }

    handleregister = (e) => {
        e.preventDefault();

        console.log(this.props)
        console.log("register Page" + this.state.email, this.state.firstname, this.state.lastname, this.state.password)
        const payload = {
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email: this.state.email,
            password:this.state.password,
        }
        this.props.fetchRegister(payload);
        window.alert('Sorry Mr ' + this.state.firstname + ' Register page in undermaintenance , Thank you')
    }

    handleChange = (e) => {
        // e.preventDefault();
        this.setState({ isChecked:e.target.checked });
    }
    render() {

        var msg;
        if (this.state.isChecked) {
            msg = "checked";
        } else {
            msg = "unchecked";
        }
        return (
            <div className="loginBox">
                <h1 className="h"> Welcome to Moms Up </h1>
                <h3 className="h">Please Register your Account</h3>

                <Container >
                    <form  >
                        <TextField
                            className="input "
                            variant="outlined"
                            margin="normal"
                            id="First Name"
                            label="First Name"
                            name="First Name"
                            autoComplete="First Name"
                            autoFocus
                            onChange={(event) => this.setState({ firstname: event.target.value })}
                        >
                        </TextField>
                        <br />
                        <TextField
                            className="input "
                            variant="outlined"
                            margin="normal"
                            id="Last Name"
                            label="Last Name"
                            name="Last Name"
                            autoComplete="Last Name"
                            autoFocus
                            onChange={(event) => this.setState({ lastname: event.target.value })}
                        >
                        </TextField>
                        <br />
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
                        </TextField> <br />

                        <section className="container">
                            <div >
                                <input onChange={this.handleChange} type="checkbox" class="filled-in" id="filled-in-box" defaultChecked={this.state.isChecked} />  By creating an account, I agree to the MomsUp
                            Terms of Use & privacy Policies.
                              <span class="checkmark"></span>
                            </div>

                        </section>
                    </form>
                    {/* <section> 
                        <div>
                        <Checkbox> 
                    </Checkbox>  By creating an account, I agree to the MomsUp
                        Terms of Use & privacy Police
                        </div>
                                     
  
                    </section> */}


                    <Button
                        style={{ width: "150px", height: "50px" }}
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={this.handleregister}
                    > Register </Button>
                </Container>
                <h3 className="p">Already have an account <NavLink to="/">  LOGIN </NavLink> </h3>
                <h3 className="p">or Register using </h3>
                <LoginIcon />

            </div>
        )
    }
}


export default Register;