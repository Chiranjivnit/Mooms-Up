import React, { Component } from 'react';
import "../homepage/Homepage.css"
import babybottle from '../homepage/image/babybottle.svg'
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//     avatar: {
//         margin: 10,
//     },
//     bigAvatar: {
//         margin: 10,
//         width: 250,
//         height: 250
//     },
//     height: {
//         marginLeft: 50,
//         margin: 10,
//         width: 40,
//         height: 40,
//     },
// });
class Signup extends Component {
    constructor(props) {

        super(props)
    }
    render() {

        return (
            <div className="feed">


                <img src={babybottle} className="babybottle" alt="babybottle"></img>
                <h1 className="feedletter">Feed  </h1>
                <h3 className="paragraph">Last feed</h3> <h3>>hr ago</h3>
                <h3 className="paragraph">Left Breast</h3> <h3>1 min</h3>
                <h3 className="paragraph">Right Breast</h3> <h3>1min</h3>
                <button className="feedbutton">+ add record</button>
            </div>
        )
    }
}
export default Signup;