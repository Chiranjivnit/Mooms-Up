import React, { Component } from 'react';
import "../Home/Homepage.css";
import Images from '../../Themes/Images'
// import moon from '../homepage/image/moon.svg';

class Sleep extends Component {

    render() {

        return (

            <div className="sleep">
                
                <img src={Images.moon} alt="moon" className="moon"></img>
                <h1 className="sleepheading"> Sleep </h1> <br/>
                <h3 className="Awake">Awake</h3> <h3 className="AwakeTime">>12 hrs ago</h3> 
                <h3 className="Awake">Today</h3>
            </div>
        )
    }
}
export default Sleep;
