import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
// import 'react-web-tabs/dist/react-web-tabs.css';
import Images from '../../../Themes/Images';
import { ListGroup } from 'react-bootstrap';
import { fetchVaccineMonthId } from '../../../Actions/VaccineAction';
import { connect } from 'react-redux';


class Tabpage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabId: '',
            vaccine_required: '',
            vaccine_taken: '',
            selectedObject: "",
            doseObject:"",
        }
    }

    _tabChange=(tabId)=> {
        this.setState({ tabId });
        this.props.fetchVaccineMonthId(tabId.slice(0, 1));
    }


    _onClick=(monthIdData) =>{
        console.log("monthdata", monthIdData);
        this.setState({ selectedObject: monthIdData })
    }

    _onDose=(doseObject)=>{
      this.setState({
           doseObject:doseObject
      })
    }

    render() {

        // console.log(this.props.vaccineMonthIdData.vaccine_required);
        const displayVaccineMonthdata = this.props.vaccineMonthIdData.map((monthdata) => {
            console.log(monthdata)
            return(
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
                               <p onClick={this._onClick.bind(this,monthdata)}>Dose {monthdata.vaccine_taken}/{monthdata.vaccine_required}</p> 
                            </div>

                        </div>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        )})
       
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
                                    <p className="o">{this.state.selectedObject ? this.state.selectedObject.vaccine_taken : 0}</p>
                                    taken
                                </div>

                            </div>
                            <div className="col-sm-1">
                                <div className="circle2">
                                    <p className="five">{this.state.selectedObject ? this.state.selectedObject.vaccine_required : 0}</p> required
                                </div>

                            </div>
                        </div>
                    </ListGroup.Item>

                </ListGroup>

                {/* {this.getTabViewData()} */}

                <TabPanel tabId={this.state.tabId} className="tabpanel">

                    {displayVaccineMonthdata}

                </TabPanel>
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

    }

}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchVaccine: data => dispatch(fetchVaccine(data)),
//         fetchVaccineMonthId: monthIdData => dispatch(fetchVaccineMonthId(monthIdData))
//     }
// }
export default connect(mapStateToProps, { fetchVaccineMonthId })(Tabpage);
