const initState = {
    dashboardData: null
}

const otherReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_DASHBOARD_DATA_SUCCESS':
        console.log(action.payload);
        action.payload.truckDistanceToday /= 1000;
        action.payload.truckDistanceLastWeek /= 1000;
            return {
                ...state,
                dashboardData: action.payload
            }
        default: 
            return state;
    }
};

export default otherReducer;