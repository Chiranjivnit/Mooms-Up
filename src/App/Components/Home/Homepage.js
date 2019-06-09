import React, { Component } from 'react';
import Babyprofile from './Babyprofile';
import Feed from './Feed';
import Sleep from './Sleep';
import Sidebar from '../Home/Navbar/Sidebar';
// import Slider from '../../Components/Home/Navbar/';

class App extends Component {

    render() {

        return (
            <React.Fragment>

                <div className="backgroundbody">
                    <div>
                        <Sidebar />
                        {/* <Slider/> */}
                    </div>

                    <Babyprofile />
                    <Feed />
                    <Sleep />
                    {/* <Slider/> */}
                </div>

            </React.Fragment>

        );
    }
}

export default App;
