import React, { Component } from 'react';
import Babyprofile from './Babyprofile';
import Feed from './Feed';
import Sleep from './Sleep';
import Sidebar from './Sidebar';
import Grid from '@material-ui/core/Grid';

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
               
            </div>

        );
    }
}

export default App;
