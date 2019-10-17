import React from 'react';
import Sidebar from '../shared/sidebar';
import ContainersMap from '../shared/containers-map';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchModules } from '../../store/actions/module-actions';

class ModulesMap extends React.Component {
    constructor(props) {
        super(props);
        this.map = {
            mapLatLng: [42.688260, 23.325639],
            mapZoom: 14
        };
    }

    componentDidMount() {
        this.props.loadModules();
    }

    componentDidUpdate() {
        console.log(this.props.modules);
    }

    render() {
        return (
            <div className="container-main">
                <ContainersMap center={this.map.mapLatLng} zoom={this.map.mapZoom} modules={this.props.modules} currentPath={this.props.location.pathname}></ContainersMap>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modules: state.modules.modules
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadModules: () => dispatch(fetchModules())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModulesMap);