import React from 'react';
import { Link, Route } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigationMenu" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navigationMenu">

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/modulesMap">Containers map <span class="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/modulesList">Containers list</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/truckTracking">Truck tracking</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;