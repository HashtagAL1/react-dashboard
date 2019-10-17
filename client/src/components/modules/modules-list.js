import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchModules, filterModules } from '../../store/actions/module-actions';
import Sidebar from '../shared/sidebar';
import ContainersMap from '../shared/containers-map'

class ModulesList extends React.Component {
    constructor(props) {
        super(props);
        this.map = {
            mapLatLng: [42.688260, 23.325639],
            mapZoom: 12
        };
        this.selectedModule = null;
    }

    componentDidMount() {
        this.props.loadModules();
    }

    filterByVolume(fillRate) {
        this.props.filterModules(fillRate);       
    }

    render() {
        return (
            <div className="w-100">
                <div className="half-side float-left">
                    <div className="pr-2 pl-2 pt-2">
                        <table className="table table-bordered table-hover text-center text-xs">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Id</th>
                                    <th>Description</th>
                                    <th>
                                        <div class="dropdown d-inline-block pointer-hover" id="fillRateDropdown" data-toggle="dropdown">Volume <i class="fas fa-sort-down dropdown-toggle"></i></div>
                                        <div class="dropdown-menu w-15">
                                            <div onClick={() => this.filterByVolume('lowest')} class="w-100 pointer-hover btn btn-success">0% - 40%</div>
                                            <div onClick={() => this.filterByVolume('low')} class="w-100 pointer-hover btn btn-warning btn-yellow">40% - 65%</div>
                                            <div onClick={() => this.filterByVolume('avg')} class="w-100 pointer-hover btn btn-warning">65% - 85%</div>
                                            <div onClick={() => this.filterByVolume('high')} class="w-100 pointer-hover btn btn-danger">85% - 100%</div>
                                            <div onClick={() => this.filterByVolume('all')} class="w-100 pointer-hover btn btn-secondary">All</div>
                                        </div>
                                    </th>
                                    <th>Temperature</th>
                                    <th>Location</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.filteredModules.map((m, i) => {
                                    return <tr key={m._id}>
                                        <td>{i + 1}</td>
                                        <td>{m._id}</td>
                                        <td>{m.description}</td>
                                        <td>{m.volume}%</td>
                                        <td>{m.temperature} C</td>
                                        <td>Lat: {m.location.lat}; Lng: {m.location.lng}</td>
                                        <td>{m.type}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="container-main half-side float-left pr-2 pl-2 pt-2">
                    <ContainersMap center={this.map.mapLatLng} zoom={this.map.mapZoom} 
                        modules={this.props.filteredModules} currentPath={this.props.location.pathname}>
                    </ContainersMap>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modules: state.modules.modules,
        filteredModules: state.modules.filteredModules
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadModules: () => dispatch(fetchModules()),
        filterModules: (criteria) => dispatch(filterModules(criteria))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModulesList);