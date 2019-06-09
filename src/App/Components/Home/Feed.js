import React, { Component } from 'react';
import "../Home/Homepage.css";
import Images from '../../Themes/Images'
// import babybottle from '../homepage/image/babybottle.svg'

class Signup extends Component {
    constructor(props) {

        super(props)
    }
    render() {

        return (
            <div className="feed">

                <label>
                    <img src={Images.babybottle} className="babybottle" alt="babybottle"></img>
                    <h1 className="feedletter"> Feed  </h1>
  
                    <div className="feedparagraph">
                        <h3 >Last Fed  </h3>
                        <h3 className="timeago">>12 hr ago</h3>
                    </div>

                    <div className="feedparagraph">
                        <h3 >Left Breast  </h3>
                        <h3 className="timeago">1 min ago</h3>
                    </div>
                    <div className="feedparagraph">
                        <h3 >Right Breast  </h3>
                        <h3 className="timeago">1 min ago</h3>
                    </div>
                 
                </label>
                <button className="feedbutton">+ add record</button>
            </div>
        )
    }
}
export default Signup;
