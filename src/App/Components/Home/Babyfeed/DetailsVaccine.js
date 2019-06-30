import React, { Component } from 'react';
import '../../Home/Homepage.css';
import Images from '../../../Themes/Images';
import { NavLink } from 'react-router-dom';
import { ListGroup, Form, Button, FormControl, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { sendVaccineTaken } from '../../../Actions/VaccineAction';



class DetailsVaccine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isShowCalender: false,
      isVaccineGiven: false,
      vaccineTaken: 0,
      vaccineRequired: '',

      userDate: "",
      clinicName: '',
      manufactureName: '',
      note: '',
    }
  }

  _onCalenderhandleChange = (date) => {

    this.setState({
      isShowCalender: !this.state.isShowCalender,
      date
    })
  }

  toggleButtonChangeColor = () => {
    this.setState({
      isVaccineGiven: !this.state.isVaccineGiven,

    })

    if (this.state.isVaccineGiven === false) {
      return this.setState({ vaccineTaken: this.props.vaccineNameTakenRequired.vaccine_taken + 1 },()=>{
        this.props.sendVaccineTaken (this.state.vaccineTaken)
      })

    } else {
      this.setState({ vaccineTaken: this.props.vaccineNameTakenRequired.vaccine_taken },()=>{
        this.props.sendVaccineTaken(this.state.vaccineTaken)
      })
    }

    //this.props.sendVaccineTaken(this.state.vaccineTaken)

  }

  _handleChangeForm = (e) => {
    this.setState({
      [e.target.id]: e.target.value

    })
  }

  handleSubmit = (e) => {
    e.preventDeafault();
  }

  render() {
    console.log(this.state.isVaccineGiven)
    console.log(this.state.vaccineTaken)
    console.log(this.props.vaccineNameTakenRequired.vaccine_taken)
    // console.log(this.props.vaccineNameTakenRequired)
    // console.log(this.state.vaccineTaken, this.state.vaccineRequired)
    console.log(this.state.userDate, this.state.clinicName, this.state.manufactureName, this.state.note)
    const { userDate, clinicName, manufactureName, note } = this.state;
    let btnClass = this.state.isVaccineGiven ? "orangeButton" : "grayButton";
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

                  <h4 > {this.props.vaccineNameTakenRequired.name} - Dose {this.state.vaccineTaken} / {this.props.vaccineNameTakenRequired.vaccine_required}</h4>

                </div>

              </div>

            </div>

          </div>

          <div className="row">
            <div className="col-sm-12">
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
                        <div className="col-sm-6">



                        </div>
                        <div className="col-sm-6">

                          <button
                            className={btnClass}
                            onClick={this.toggleButtonChangeColor}
                          >
                            {this.state.isVaccineGiven ? "ON" : "OFF"}
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>

                </ListGroup.Item>
              </ListGroup>

              <br />

              <div className="date">
                <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="userDate" >
                    <FormControl
                      autoFocus
                      size="lg"
                      type="date"
                      name="userDate"
                      value={userDate}
                      placeholder={this.state.date}
                      onChange={this._handleChangeForm}
                    />
                  </FormGroup>
                </form>
              </div>

              <br />

              <div className="ClinicManufacture">
                <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="clinicName">
                    <FormControl
                      autoFocus
                      size="lg"
                      type="text"
                      placeholder="Clinic Name"
                      name=" clinicName"
                      value={clinicName}
                      onChange={this._handleChangeForm}
                    />
                  </FormGroup>

                  <br />
                  <FormGroup controlId="manufactureName">
                    <FormControl
                      autoFocus
                      size="lg"
                      type="text"
                      placeholder="Manufacture Name"
                      className="formsOut"
                      name=" manufactureName"
                      value={manufactureName}
                      onChange={this._handleChangeForm} />
                  </FormGroup>

                </form>
              </div>

              <br />
              <div className="note" >
                <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="note" >

                    <FormControl
                      autoFocus
                      as="textarea"
                      rows="5"
                      placeholder="Note"
                      size="lg" name="note"
                      value={note}
                      onChange={this._handleChangeForm} />

                  </FormGroup>
                </form>
              </div>
            </div>
          </div>

          <NavLink to="/Vaccine">
            <div className="save">
              <Button variant="secondary" size="lg" block type="button" onSubmit={this.handleSubmit} >
                SAVE
            </Button>
            </div>
          </NavLink>



        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    vaccineNameTakenRequired: state.vaccineReducer.sendVaccineData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendVaccineTaken: vaccineTaken => dispatch(sendVaccineTaken(vaccineTaken))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsVaccine);