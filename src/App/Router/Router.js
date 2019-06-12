import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from '../Components/Home/Homepage';
import Signup from '../Components/Auth/Login/Signup';
import Register from '../Components/Auth/Register/Register';
import '../Components/Auth/Login/Login.css'
class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="body">
                    <Switch>
                        <Route path="/Homepage" component={Homepage} exact />
                        <Route path="/" component={Signup} exact />
                        <Route path="/Register" component={Register} exact />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router;