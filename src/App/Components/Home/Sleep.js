import React, { Component } from 'react';
import "../Home/Homepage.css";
import Images from '../../Themes/Images'
// import moon from '../homepage/image/moon.svg';

class Sleep extends Component {

    render() {

        return (

            <div className="sleep">
               
                <img src={Images.moon} alt="moon" className="moon"></img>
                <p className="sleepheading"> Sleep </p> <br />
                <div className="sleepparagraph">
                        <p >Awake  </p>
                        <p className="timeago">>12 hr ago</p>
                    </div>
                  
                <div className="Awake">
                    {/* <label>
                        <header className="">Awake</header> >12 hrs ago <p className="AwakeTime"></p>
                    </label> */}
                     
                    

                    <p className="Awake">Today</p>
                </div>


            </div>
        )
    }
}
export default Sleep;
