import React from 'react';
import { Link, Route } from 'react-router-dom';
import Sidebar from '../shared/sidebar';
import TruckMap from '../shared/truck-map';
import { connect } from 'react-redux';
import { fetchTruckPath } from '../../store/actions/truck-actions';

class TruckTracking extends React.Component {
    constructor(props) {
        super(props);
        this.map = {
            mapLatLng: [42.688260, 23.325639],
            mapZoom: 12
        };
    }

    componentDidMount() {
        this.props.loadTruckPath();
    }

    componentDidUpdate() {
        //console.log(this.props.truckPath);
    }

    render() {
        return (
            <div className="container-main">
                <div className="sidebar-container">
                    <Sidebar></Sidebar>
                </div>
                <div className="map-container">
                    <TruckMap center={this.map.mapLatLng} zoom={this.map.mapZoom} truckPath={this.props.truckPath}></TruckMap>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        truckPath: state.trucks.truckPath
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadTruckPath: () => dispatch(fetchTruckPath())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TruckTracking);