import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTruckPath, updateAnimationState } from '../../store/actions/truck-actions';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.loadTruckPath = this.loadTruckPath.bind(this);
    }

    loadTruckPath() {
        this.props.loadPath();
        this.props.changeAnimationState('reset');
    }

    render() {
        return (
            <div>
                <div className="pt-1">
                    <button onClick={() => this.loadTruckPath()} className="btn-sm btn btn-secondary">Load truck path</button>
                </div>
                <div className="pt-1">
                    <div className="d-inline-block">
                        <button onClick={() => this.props.changeAnimationState('play')} className="btn-sm btn btn-secondary"><i class="fas fa-play"></i></button>
                    </div>
                    <div className="d-inline-block pl-1">
                        <button onClick={() => this.props.changeAnimationState('pause')} className="btn-sm btn btn-secondary"><i class="fas fa-stop"></i></button>
                    </div>
                    <div className="d-inline-block pl-1">
                        <button onClick={() => this.props.changeAnimationState('reset')} className="btn-sm btn btn-secondary"><i class="fas fa-undo"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPath: () => dispatch(fetchTruckPath()),
        changeAnimationState: (newState) => dispatch(updateAnimationState(newState))
    }
}

export default connect(null, mapDispatchToProps)(Sidebar);