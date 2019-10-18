import React from 'react';
import { connect } from 'react-redux';
import { hideShowSidebar } from './cssHelper/helper'
import { fetchModules, fetchDashboardInfo } from '../../store/actions/module-actions';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.generateInfoJsx = this.generateInfoJsx.bind(this);
    }

    componentDidMount() {
        this.props.loadDashboardData()
    }   
    
    generateInfoJsx (data) {
        return <div className="row h-20 pt-3 justify-content-center">
        <div className="dashboard-general-stats ml-3 pt-3 pr-1 custom-bg-primary">
        <div className="float-left pl-2"><i class="fas fa-trash"></i></div> 
            <div className="text-sm float-left pl-5 font-weight-bold">Total modules: {data.modules.length}</div>
        </div>
        <div className="dashboard-general-stats ml-3 pt-3 pr-1 custom-bg-primary"> 
            <div className="float-left pl-2"><i class="fas fa-trash"></i></div>               
            <div className="text-sm float-left pl-5 font-weight-bold">Average volume: {data.avgVolumeNow.toFixed(2)}kg</div>                
            <div className="text-sm float-left pl-2 font-weight-bold">Average volume last week: {data.avgVolumeLastWeek.toFixed(2)}kg</div>
        </div>
        <div className="dashboard-general-stats ml-3 pt-3 pr-1 custom-bg-primary">
            <div className="float-left pl-2"><i class="fas fa-truck"></i></div>
            <div className="text-sm float-left pl-5 font-weight-bold">Total active trucks: {data.activeTrucks}</div>
        </div>
        <div className="dashboard-general-stats ml-3 pt-3 pr-1 custom-bg-primary">
            <div className="float-left pl-2"><i class="fas fa-truck"></i></div>
            <div className="text-sm float-left pl-3 font-weight-bold">Travelled distance today: {data.truckDistanceToday.toFixed(2)}km</div>
            <div className="text-sm float-left pl-4 font-weight-bold">Travelled distance today: {data.truckDistanceLastWeek.toFixed(2)}km</div>
        </div>
    </div>
    }

    render() {
        let infoJsx = null;
        let volumeChartJsx = null;
        let distanceChartJsx = null;
        if (this.props.dashboardData) {
            infoJsx = this.generateInfoJsx(this.props.dashboardData);
        }
        return (
            <div className="w-100 main bg-dark">
                <div id="content" className="custom-bg-dark">
                    <nav className="navbar navbar-expand-lg navbar-light custom-bg-dark">
                        <div class="container-fluid">

                            <button onClick={() => hideShowSidebar()} type="button" id="sidebarCollapse" className="btn btn-dark custom-bg-dark">
                                <i className="fas fa-align-left"></i>
                            </button>

                        </div>
                    </nav>
                </div>
                {infoJsx}
                <div className="row h-45 justify-content-center mt-3 testBorder">
                    <div id="dashboard-volume-chart" className="float-left w-50 testBorder"></div>
                    <div id="dashboard-distance-chart" className="w-50 testBorder"></div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('dispatch');
    return {
        loadDashboardData: () => dispatch(fetchDashboardInfo())
    }
}

const mapStateToProps = (state) => {
    return {
        dashboardData: state.other.dashboardData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);