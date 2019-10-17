import React from 'react';
import L from 'leaflet';
import { connect } from 'react-redux';
import { Map, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import { updateTruckPosition, updateAnimationState } from '../../store/actions/truck-actions';
import { getGreenModuleIcon, getTruckIcon, getModuleIcon } from '../../services/modules-service';
import { fetchTruckPath } from '../../store/actions/truck-actions';
import * as mm from '../../external/Leaflet.MovingMarker-master/MovingMarker';

class TruckMap extends React.Component {
    constructor(props) {
        super(props);
        this.initializeAnimation = this.initializeAnimation.bind(this);
        this.generateCoordinates = this.generateCoordinates.bind(this);
        this.updateSnakePoyline = this.updateSnakePoyline.bind(this);
        this.resetAnimation = this.resetAnimation.bind(this);
        this.endAnimation = this.endAnimation.bind(this);
        this.map = null;
        this.containerMarkers = null;
        this.durations = 3000;
        this.truckMarker = null;
        this.snakePolyline = null;
        this.stationIndexes = null;
        this.prevMovement = { lat: null, lng: null };
    }

    componentDidMount() {
        this.map = L.map('truck-tracking-map', {
            center: this.props.center,
            zoom: this.props.zoom
        });
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    componentDidUpdate() {
        if (this.props.truckPath && !this.truckMarker) {
            this.initializeAnimation(this.props.truckPath.measurements);
        }
        
        if (this.props.animationState === 'play') {
            if (this.truckMarker && !this.truckMarker.isRunning()) {
                if (this.truckMarker.isEnded()) {
                    this.resetAnimation();
                    this.initializeAnimation(this.props.truckPath.measurements);
                }
                this.truckMarker.start();
            } else if (this.truckMarker && this.truckMarker.isPaused()) {
                this.truckMarker.resume();
            }
        } else if (this.props.animationState === 'pause') {
            if (this.truckMarker && this.truckMarker.isRunning()) {
                this.truckMarker.pause();
            }
        } else if (this.props.animationState === 'reset') {
            this.resetAnimation();
            this.initializeAnimation(this.props.truckPath.measurements);
        }
    }

    generateCoordinates (measurements) {
        let result = [];
        for (let m of measurements) {
            result.push([m.location.lat, m.location.lng]);
        }
        return result;
    }

    updateSnakePoyline (event) {
        let currentLocation = event.target.getLatLng();
        this.snakePolyline.addLatLng(currentLocation);
        let current = this.truckMarker.getLatLng();
        let map = this.map;

        if (current.lat === this.prevMovement.lat && current.lng === this.prevMovement.lng) {
            let modulesToRemove = this.containerMarkers.filter(m => m._latlng.lat === current.lat && m._latlng.lng === current.lng);
            if (modulesToRemove.length > 0) {
                for (let item of modulesToRemove) {
                    setTimeout(function () {
                        map.removeLayer(item);
                    }, 1000);
                }
            }

            this.containerMarkers = this.containerMarkers.filter(m => m._latlng.lat !== current.lat && m._latlng.lng !== current.lng);
        }

        this.prevMovement = {
            lat: current.lat,
            lng: current.lng
        }
    }

    resetAnimation() {
        this.map.removeLayer(this.snakePolyline);
        this.map.removeLayer(this.truckMarker);
        for (let c of this.containerMarkers) {
            this.map.removeLayer(c)
        }
        this.containerMarkers = [];
    }

    endAnimation() {
        this.props.finishAnimation();
        //this.truckMarker.stop();
    }

    initializeAnimation(measurements) {
        this.stationIndexes = [];
        this.snakePolyline = L.polyline([], { color: '#51BBE1' });
        this.snakePolyline.addTo(this.map)
        this.containerMarkers = [];

        for (let i = 0; i < measurements.length; i++) {
            let m = measurements[i];
            if (m.type !== 'collect') {
                continue;
            }
            let icon = L.icon({ iconUrl: getModuleIcon(m.value) });
            let marker = L.marker([m.location.lat, m.location.lng], { icon: icon });
            this.stationIndexes.push(i);
            this.containerMarkers.push(marker);
            marker.addTo(this.map);
        }
        let truckIcon = L.icon({ iconUrl: getTruckIcon() });
        let coordinates = this.generateCoordinates(measurements);


        this.truckMarker = L.Marker.movingMarker(coordinates, this.durations, { autostart: false, icon: truckIcon });
        for (let i of this.stationIndexes) {
            this.truckMarker.addStation(i, 1000);
        }
        this.truckMarker.on('move', this.updateSnakePoyline);
        this.truckMarker.on('end', this.endAnimation)
        this.truckMarker.addTo(this.map);
    }

    render () {
        return (
            <div id="truck-tracking-map" className='w-100 h-100'></div>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        truckPosition: state.trucks.truckPosition,
        animationState: state.trucks.animationState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        finishAnimation: () => dispatch(updateAnimationState('stop'))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TruckMap);