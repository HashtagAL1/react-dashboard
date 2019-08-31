import React from 'react';
import { Link, Route } from 'react-router-dom';
import Sidebar from '../shared/sidebar'

class TruckTracking extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-main">
                <div className="sidebar-container">
                    <Sidebar></Sidebar>
                </div>
                <div className="map-container">Truck tracking map is here</div>
            </div>
        );
    }
}

export default TruckTracking;