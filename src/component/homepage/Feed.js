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
            <RenderFeed name="Last feed" hour="12 hr ago"/>
            <RenderFeed name="Left Breast" hour="1 min"/>
            <RenderFeed name="Right Breast" hour="1 min"/>
                <button className="feedbutton">+ add record</button>
            </div>
        )
    }
}
export default Signup;

const RenderFeed=(props)=>{
    const { name , hour } = props
 return(
     <div className="renderfeed">
        <h3 className="paragraph">{name}</h3> <h3>>{hour}</h3>
     </div>
 )
}