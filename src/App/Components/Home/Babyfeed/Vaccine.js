import React, { Component } from 'react';
// import "../Babyfeed/Feed.css";
import '../../Home/Homepage.css'
import Images from '../../../Themes/Images';
import { NavLink , Redirect } from 'react-router-dom';
import Tab from './Tab';
// import "../Homepage.css"

class Vaccine extends Component {

    componentWillMount() {
        let token = localStorage.getItem("token");
        if (!token) {
            this.props.history.push("/");
        }
    }

    _onLogout =()=>{
       localStorage.clear()
       this.props.history.push("/");
    }

    render() {

        return (
            <div className="backgroundbody">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="imagepadding">
                                <header className="headervaccine">
                                  <label >
                                    <NavLink  to="/" className="navlink"><img src={Images.leftarrow} className="leftarrow" alt="leftarrow"  /> Vaccine </NavLink>    
                                    
                                   </label>
                                </header>
                            </div>
                        </div>
                        <div className="col-sm-6">
                           <div>
                               <header className="editvaccine">
                                 
                                </header>
                            </div>
                        </div>  
                        <div className="col-sm-2">
                           <div className="editvaccine" onClick={this._onLogout}>
                              <label>
                                  <img src={Images.logout} className="details" alt="logout" /> Logout
                              </label> 
                           </div>
                        </div>

                               <Tab> 
                            

                               </Tab>   
                          
                    </div>

                </div>
            </div>
        )
    }
}


export default Vaccine;


