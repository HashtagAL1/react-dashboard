import React from 'react';
import { Link, Route } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button className="btn sidebar-btn">Select date</button>
            </div>
        );
    }
}

export default Sidebar;