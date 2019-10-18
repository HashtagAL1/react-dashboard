import React from 'react';
import { Link } from 'react-router-dom'

class VerticalSidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h6>Thoremus React Dashboard Demo</h6>
                    </div>

                    <ul className="list-unstyled components">
                        <p>Menu</p>
                        <li>
                            <Link to="/home">Dashboard</Link>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Modules</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>

            </div>
        )
    }
}

export default VerticalSidebar;