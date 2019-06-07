import React, { Component } from 'react';
import Babyprofile from './Babyprofile';
import Feed from './Feed';
import Sleep from './Sleep';
import Sidebar from './Sidebar';
import Grid from '@material-ui/core/Grid';
//import Babyprofilecard from './Babyprofilecard';
//import CssBaseline from '@material-ui/core/CssBaseline';
//import Container from '@material-ui/core/Container';
import Article from './Article';
import Flexprofile from './Flexprofile';
//import Flexarticle from './Flexarticle';

class App extends Component {

    render() {

        return (
            <React.Fragment>

                <div className="backgroundbody">
                    <div>
                        <Sidebar />
                    </div>

                    {/* <Babyprofilecard/> */}
                    {/* <Flexprofile />
                    <Article /> */}
                    {/* <Flexarticle/> */}

                    <Babyprofile />
                    <Feed />
                    <Sleep />

                </div>

            </React.Fragment>

        );
    }
}

export default App;
