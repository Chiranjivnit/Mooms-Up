import React, { Component } from 'react';
import Babyprofile from './Babyprofile';
import Feed from './Feed';
import Sleep from './Sleep';
import Sidebar from './Sidebar';
import Grid from '@material-ui/core/Grid';
import Babyprofilecard from './Babyprofilecard';

class App extends Component {

    render() {

        return (

            <div className="backgroundbody">
                <div className="OvalShapeView">
                    <Grid >
                        <header className="Tool-header">

                        </header>
                    </Grid>
                </div>
              
                <Babyprofile />       
                <Feed />
                <Sleep />
                <Sidebar />
                <Babyprofilecard/>
               
            </div>

        );
    }
}

export default App;
