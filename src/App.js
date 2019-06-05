import React, { Component } from 'react';
import Signup from './component/Signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './component/Register';
import "./component/Login.css"
import Homepage from './component/homepage/Homepage';

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
    );
  }
}

export default App;
