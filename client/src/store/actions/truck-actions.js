import { getTruckPath } from '../../services/trucks-service';

export const fetchTruckPath = () => {
    return (dispatch, getState) => {
        getTruckPath().then((res) => {
            dispatch({ type: 'GET_TRUCK_PATH_SUCCESS', payload: res.data });
        })
        .catch((e) => {
            dispatch({ type: 'GET_TRUCK_PATH_ERROR', payload: e });
        });
    }
}

export const updateAnimationState = (newState) => {
    return (dispatch, getState) => {
        dispatch({ type: 'ANIMATION_STATE_CHANGE', payload: newState });
    }
}

export const updateTruckPosition = (newPosition) => {
    return (dispatch, getState) => {
        dispatch({ type: 'UPDATE_TRUCK_POSITION', payload: newPosition });
    }
}