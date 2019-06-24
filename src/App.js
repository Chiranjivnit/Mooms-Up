import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Router from './App/Router/Router';

function App() {

  return (

    <BrowserRouter>
      <div className="body">
        <Switch>

          <Router />

        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
