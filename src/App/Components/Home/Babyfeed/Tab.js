import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
// import 'react-web-tabs/dist/react-web-tabs.css';
import Images from '../../../Themes/Images';
import { ListGroup } from 'react-bootstrap';
import { fetchVaccineMonthId, sendVaccineData } from '../../../Actions/VaccineAction';
import { connect } from 'react-redux';
import { NavLink, } from 'react-router-dom';
import "../Homepage.css";


class Tabpage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabId: '',
            vaccine_required: '',
            vaccine_taken: '',
            selectedObject: "",
            doseObject: "",
            vaccineMonthIdData: ""
        }
    }

    _tabChange = (tabId) => {
        this.setState({ tabId });
        this.props.fetchVaccineMonthId(tabId.slice(0, 1));
    }


    _onClick = (monthIdData) => {
        this.props.sendVaccineData(monthIdData)
    }

    _onDose = (doseObject) => {
        this.setState({
            doseObject: doseObject
        })
    }

    render() {
        const { selectedVaccineData } = this.props;
        console.log("sendVaccineData", selectedVaccineData);
        const displayVaccineMonthdata = this.props.vaccineMonthIdData.map((monthdata) => {
            console.log(monthdata)
            return (
                <ListGroup variant="flush" key={monthdata.id} onClick={this._onClick.bind(this, monthdata)}>
                    <ListGroup.Item onClick={this._onClick.bind(this, monthdata)}>
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="m">
                                    <img src={Images.needle} className="leftarrow" alt="needle" />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div key={monthdata.id}>
                                    <p className="DTap">{monthdata.name}</p>
                                    <p onClick={this._onClick.bind(this, monthdata)}>Dose {monthdata.vaccine_taken}/{monthdata.vaccine_required}</p>
                                </div>

                            </div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            )
        })

        return (
            <Tabs
                className="rwt__tabs"
                defaultTab="one"
                onChange={(tabId) => this._tabChange(tabId)}>
                <TabList className="rwt__tablist">

                    <Tab tabFor="" className="rwt__tab"> Birth:</Tab>
                    <Tab tabFor="1M"> 1M</Tab>
                    <Tab tabFor="2M"> 2M</Tab>
                    <Tab tabFor="3M"> 3M</Tab>
                    <Tab tabFor="4M"> 4M</Tab>
                    <Tab tabFor="5M"> 5M</Tab>
                    <Tab tabFor="6M"> 6M</Tab>
                    <Tab tabFor="1Y"> 1Y</Tab>
                    <Tab tabFor="2Y"> 2Y</Tab>
                </TabList>

                <ListGroup variant="flush">

                    <ListGroup.Item className="Birth1M">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="m">
                                    {this.state.tabId}
                                </div>
                            </div>

                            <div className="col-sm-2">
                                <div className="circle">
                                    <p className="o">{this.props.vaccineTaken}</p>
                                    taken
                                </div>

                            </div>
                            <div className="col-sm-1">
                                <div className="circle2">
                                    <p onClick={this._onClick.bind(this, selectedVaccineData)} className="five">{selectedVaccineData ? selectedVaccineData.vaccine_required : 0}</p> required
                                </div>

                            </div>
                        </div>
                    </ListGroup.Item>

                </ListGroup>

                {/* {this.getTabViewData()} */}

                <NavLink to={{
                    pathname: "/DetailsVaccine",
                    vaccineMonthIdData: this.state.vaccineMonthIdData

                }} className="navlink">
                    <TabPanel tabId={this.state.tabId} className="tabpanel">

                        {displayVaccineMonthdata}

                    </TabPanel>
                </NavLink>


            </Tabs>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        vaccineData: state.vaccineReducer.vaccineData,
        error: state.vaccineReducer.error,

        //VACCINE MONTH ID DATA

        vaccineMonthIdData: state.vaccineReducer.monthIdData,

        vaccineTaken: state.vaccineReducer.sendVaccineTaken,
        selectedVaccineData: state.vaccineReducer.sendVaccineData,


    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchVaccineMonthId: tabId => dispatch(fetchVaccineMonthId(tabId)),
        // vaccineMonthIdsucess: monthIdData=> dispatch(vaccineMonthIdsucess(monthIdData))
        sendVaccineData: monthIdData => dispatch(sendVaccineData(monthIdData))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tabpage);
