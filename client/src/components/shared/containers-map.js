import React from 'react';
import { Map, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import { getModuleIcon } from '../../services/modules-service';
import L from 'leaflet';

class ContainersMap extends React.Component {
    constructor(props) {
        super(props);
    }

    generateLayerControl(collection, name, checked) {
        return <LayersControl.BaseLayer name={name} checked={checked}>
                        <LayerGroup>
                            {collection.map((m, i) => {
                                let icon = new L.icon({ iconUrl: process.env.PUBLIC_URL + getModuleIcon(m.volume) });
                                return <Marker key={m._id} position={[m.location.lat, m.location.lng]} icon={icon}>
                                    <Popup>
                                    <div className="text-center">
                                        <div>Id: {m._id}</div>
                                        <div>Type: {m.type}</div>
                                        <div>Temperature: {m.temperature} C</div>
                                        <div>Volume: {m.volume}%</div>
                                        <div>Description: {m.description}</div>
                                        <div>Latitude: {m.location.lat}</div>
                                        <div>Longitude: {m.location.lng}</div>
                                    </div>
                            </Popup>    
                                </Marker>
                            })}
                        </LayerGroup>
                    </LayersControl.BaseLayer>
    }

    render () {
        let jsxContent = null;
        if (this.props.currentPath === '/modulesList') {
                jsxContent = <Map center={this.props.center} zoom={this.props.zoom} style={{height: "75%", width: "100%"}}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {this.props.modules.map((m, i) => {
                    let icon = new L.icon({ iconUrl: process.env.PUBLIC_URL + getModuleIcon(m.volume) });
                    return <Marker key={m._id} position={[m.location.lat, m.location.lng]} icon={icon}>
                        <Popup>
                        <div className="text-center">
                            <div>Id: {m._id}</div>
                            <div>Type: {m.type}</div>
                            <div>Temperature: {m.temperature} C</div>
                            <div>Volume: {m.volume}%</div>
                            <div>Description: {m.description}</div>
                            <div>Latitude: {m.location.lat}</div>
                            <div>Longitude: {m.location.lng}</div>
                        </div>
                </Popup>    
                    </Marker>
                })}
            </Map>
        } else {
            let lowest = [];
            let low = [];
            let avg = [];
            let high = [];
            let all = [];

            for (let m of this.props.modules) {
                if (m.volume >=0 && m.volume <= 40) {
                    lowest.push(m);
                } else if (m.volume > 40 && m.volume <= 65) {
                    low.push(m);
                } else if (m.volume > 65 && m.volume <= 85) {
                    avg.push(m);
                } else {
                    high.push(m);
                }
                all.push(m);
            }

            jsxContent = <Map center={this.props.center} zoom={this.props.zoom} style={{height: "100%", width: "100%"}}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            />

                            <LayersControl position="topleft" collapsed={false}>
                                {this.generateLayerControl(lowest, '0% - 40%', false)}
                                {this.generateLayerControl(low, '40% - 65%', false)}
                                {this.generateLayerControl(avg, '65% - 85%', false)}
                                {this.generateLayerControl(high, '85% - 100%', false)}
                                {this.generateLayerControl(all, 'all', true)}
                            </LayersControl>
                        </Map>
        }
        
        return (
            <div className="w-100 h-100">
                {jsxContent}
            </div>
            
        );
    }
}

export default ContainersMap;