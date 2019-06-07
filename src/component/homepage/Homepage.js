import React, { Component } from 'react';
import Babyprofile from './Babyprofile';
import Feed from './Feed';
import Sleep from './Sleep';
import Sidebar from './Sidebar';

class App extends Component {

    render() {

        return (
            <React.Fragment>

                <div className="backgroundbody">
                    <div>
                        <Sidebar />
                    </div>

                    <Babyprofile />
                    <Feed />
                    <Sleep />

                </div>

            </React.Fragment>

        );
    }
}

export default App;
