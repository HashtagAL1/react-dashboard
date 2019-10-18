import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ModulesMap from '../modules/modules-map';
import ModulesList from '../modules/modules-list';
import TruckTracking from '../trucks/truck-tracking';
import Home from '../newDashboard/home';

class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                {/* <Route path="/" exact component={ModulesMap}/> */}
                <Route path="/" exact component={Home}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/modulesMap" exact component={ModulesMap}/>
                <Route path="/modulesList" exact component={ModulesList}/>    
                <Route path="/truckTracking" exact component={TruckTracking}/>                
            </Switch>
        );
    }
}

export default AppRouter;