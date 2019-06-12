import React, { Component } from 'react';
import Signup from './App/Containers/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Register from './App/Components/Auth/Register/Register';
import Register from './App/Containers/RegisterContainer';
import "./App/Components/Auth/Login/Login.css";
import Homepage from './App/Components/Home/Homepage';
//import Router from '../src/App/Router/Router';

class App extends Component {

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
      // <div>
      //   {/* <Route/> */}
      // </div>
    );
  }
}

export default App;
