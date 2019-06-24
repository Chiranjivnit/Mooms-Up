import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../Components/Auth/Login/Login.css';
import Homepage from '../Components/Home/Homepage';
import Signup from '../Components/Auth/Login/Signup';
import Register from '../Components/Auth/Register/Register';
import Vaccine from '../Components/Home/Babyfeed/Vaccine';
import DetailsVaccine from '../Components/Home/Babyfeed/DetailsVaccine';
import Dialog from '../Components/Auth/Login/Dialog';



function Router() {

    return (
        <BrowserRouter>
            <div className="body">
                <Switch>
                    <Route path="/Homepage" component={Homepage} exact />
                    <Route path="/" component={Signup} exact />
                    <Route path="/Register" component={Register} exact />
                    <Route path="/Vaccine" component={Vaccine} exact />
                    <Route path="/DetailsVaccine" component={DetailsVaccine} exact />
                    <Route path="/Dialog" component={Dialog} exact />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Router;