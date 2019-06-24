import React, { Component } from 'react';
// import "../Babyfeed/Feed.css";
import '../../Home/Homepage.css'
import Images from '../../../Themes/Images';
import { NavLink } from 'react-router-dom';
import Tab from './Tab';

class Vaccine extends Component {

    render() {
        return (
            <div className="backgroundbody">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="imagepadding">
                                <header className="headervaccine">
                                  <label>
                                    <NavLink  to="/Homepage"><img src={Images.leftarrow} className="leftarrow" alt="leftarrow" /> </NavLink> Vaccine  
                                    
                                   </label>
                                </header>
                            </div>
                        </div>
                        <div className="col-sm-6">
                           <div>
                               <header className="editvaccine">
                                  <label>
                                    <NavLink to="/DetailsVaccine"><img src={Images.edit} className="details" alt="leftarrow" /> </NavLink><p>Details</p>            
                                    
                                   </label>
                                </header>
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


