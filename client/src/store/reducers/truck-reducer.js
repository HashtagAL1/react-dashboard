const initState = {
    trucks: [],
    truckPosition: null,
    animationState: 'reset'
};

const truckReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_TRUCK_PATH_SUCCESS':
            return {
                ...state,
                truckPath: action.payload,
                truckPosition: action.payload.measurements[0].location
            };
        case 'UPDATE_TRUCK_POSITION':
            return {
                ...state,
                truckPosition: action.payload
            };
        case 'ANIMATION_STATE_CHANGE':
            return {
                ...state,
                animationState: action.payload
            }
        default:
            return state;
    }
    //return state;
};

export default truckReducer;