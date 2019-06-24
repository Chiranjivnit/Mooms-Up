import React from 'react';
import "../../Home/Homepage.css";
import Images from '../../../Themes/Images'
import { NavLink } from 'react-router-dom';
// import babybottle from '../homepage/image/babybottle.svg'

function Signup() {

    return (
        <div className="feed">

            <label>
                <img src={Images.babybottle} className="babybottle" alt="babybottle"></img>
                <p className="feedletter"> Feed  </p>

                <div className="feedparagraph">
                    <p >Last Fed  </p>
                    <p className="timeago">>12 hr ago</p>
                </div>

                <div className="feedparagraph">
                    <p >Left Breast  </p>
                    <p className="timeago">1 min ago</p>
                </div>
                <div className="feedparagraph">
                    <p >Right Breast  </p>
                    <p className="timeago">1 min ago</p>
                </div>

            </label>
            <button className="feedbutton"> <NavLink to="/Vaccine"> + Add record </NavLink></button>

        </div>
    )
}

export default Signup;
