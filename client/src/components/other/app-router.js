import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ModulesMap from '../modules/modules-map';
import ModulesList from '../modules/modules-list';
import TruckTracking from '../trucks/truck-tracking';

class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={ModulesMap}/>
                <Route path="/modulesMap" exact component={ModulesMap}/>
                <Route path="/modulesList" exact component={ModulesList}/>    
                <Route path="/truckTracking" exact component={TruckTracking}/>                
            </Switch>
        );
    }
}

export default AppRouter;