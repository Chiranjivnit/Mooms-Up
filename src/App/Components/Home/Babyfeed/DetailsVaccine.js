import React, { Component } from 'react';
import '../../Home/Homepage.css';
import Images from '../../../Themes/Images';
import { NavLink } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

class DetailsVaccine extends Component {

  render() {
    return (
      <div className="backgroundbody" >
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="imagepadding">
                <header className="headervaccine">
                  <label>
                    <NavLink to="/Vaccine"><img src={Images.leftarrow} className="leftarrow" alt="leftarrow" /> </NavLink> Vaccine Detail
              </label>
                </header>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="">

                <header className="">
                  <h3> </h3>
                </header>
              </div>
            </div>

            <div className="col-sm-2">
              <div className="timer">

                <label>
                  <img src={Images.timer} className="leftarrow" alt="leftarrow" />  clear
               </label>


                <h3> </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <div>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <div className="detaivaccineneedle">
                        <label>
                          <img src={Images.needle} className="leftarrow" alt="leftarrow" />
                        </label>
                      </div>
                    </ListGroup.Item>
                  </ListGroup >
                </div>

              </div>
              <div className="col-sm-10">
                <div className="detailvaccineparagraph">

                  <h4 > DTap or DtwP - Dose 2 / 3</h4>

                </div>

              </div>
              <div className="col-sm-2">
                <div>
                </div>
              </div>
            </div>

          </div>
          <ListGroup variant="flush">
            <ListGroup.Item>

              <div className="row">
                <div className="">
                  <div className="col-sm-2">

                  </div>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item className="boxcolordetailvaccine">
              <div className="row">
                <div className="col-sm-6">
                  <p className="VaccineGiven">Vaccine Given ?</p>
                </div>
                <div className="col-sm-3">

                </div>
                <div className="col-sm-3">
                  {/* nested row and coloumn */}
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="orangebutton">
                        <div className="card bg-warning text-white" >
                          <div className="card-body">
                            OFF
                            </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="graybutton">
                        <div className="card bg-light text-dark" >
                          <div className="card-body">
                            ON
                            </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </ListGroup.Item>
          </ListGroup>

          <ListGroup>
            <ListGroup.Item className="datedetailvaccine">
              <div className="row">
                <div className="col-sm-6">
                  <h2 className="VaccineGiven">08th May, 2019</h2>
                </div>
                <div className="col-sm-3">

                </div>
                <div className="col-sm-3">
                  {/* nested row and coloumn */}
                  <div className="row">
                    <div className="col-sm-4">

                    </div>
                    <div className="col-sm-4">
                      <div >
                        <img src={Images.calendar} className="calendar" alt="leftarrow" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </ListGroup.Item>
          </ListGroup>

          <ListGroup>
            <ListGroup.Item className="datedetailvaccine">
              <div className="row">
                <div className="col-sm-6">
                  <p className="clinicparagrapg">Clinic Name</p>
                </div>
                <div className="col-sm-3">

                </div>
                <div className="col-sm-3">
                  {/* nested row and coloumn */}
                  <div className="row">
                    <div className="col-sm-4">

                    </div>
                    <div className="col-sm-4">

                    </div>

                  </div>
                </div>
              </div>

            </ListGroup.Item>
          </ListGroup>

          <fieldset>
          <legend>Manufacture</legend>
          <ListGroup>
            <ListGroup.Item className="datedetailvaccine">
             
              
                <div className="row">

                  
                  <div className="col-sm-6">

                    <p className="clinicparagrapg">Manufacture Name</p>
                  </div>

                  <div className="col-sm-3">

                  </div>
                  <div className="col-sm-3">
                    {/* nested row and coloumn */}
                    <div className="row">
                      <div className="col-sm-4">

                      </div>
                      <div className="col-sm-4">

                      </div>

                    </div>
                  </div>
                </div>
                
            </ListGroup.Item>
          </ListGroup>
          </fieldset>
            <ListGroup>
              <ListGroup.Item className="notedetailvaccine">
                <div className="row">
                  <div className="col-sm-6">

                    <p className="noteparagraphdetailvaccine">Notes</p>
                  </div>
                  <div className="col-sm-3">

                  </div>
                  <div className="col-sm-3">
                    {/* nested row and coloumn */}
                    <div className="row">
                      <div className="col-sm-4">

                      </div>
                      <div className="col-sm-4">

                      </div>

                    </div>
                  </div>
                </div>

              </ListGroup.Item>
            </ListGroup>

            <ListGroup>
              <ListGroup.Item className="savebutton">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="paragraphdetailvaccine"></p>
                  </div>
                  <div className="col-sm-6">
                    <p className="paragraphdetailvaccine">SAVE</p>
                  </div>
                  <div className="col-sm-3">
                    {/* nested row and coloumn */}
                    <div className="row">
                      <div className="col-sm-4">

                      </div>
                      <div className="col-sm-4">

                      </div>

                    </div>
                  </div>
                </div>

              </ListGroup.Item>
            </ListGroup>

        </div>
        </div>
        )
      }
    }
    
export default DetailsVaccine;