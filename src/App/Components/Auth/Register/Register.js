import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../Login/Login.css'
import { NavLink } from 'react-router-dom';
import LoginIcon from '../Login/LoginIcon';
import Checkbox from './Checkbox';
import { connect } from 'react-redux';
import { fetchRegister } from '../../../Actions/RegisterActions';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
    }

    handleregister = (e) => {
        e.preventDefault()
        console.log("register Page" + this.state.email, this.state.firstname, this.state.lastname, this.state.password)
        window.alert('Sorry Mr ' + this.state.firstname + ' Register page in undermaintenance , Thank you')
    }
    render() {
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
                                <input type="checkbox" checked="checked" />  By creating an account, I agree to the MomsUp
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

const mapStateToProps = () => {
    return {
        data: state.registerReducer.data,
        error: state.registerReducer.error,
        fetch: state.registerReducer.fetch
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRegister: data => dispatch(fetchRegister(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);