const initState = {
    modules: [],
    filteredModules: []
};
const moduleReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_MODULES_SUCCESS':
            return {
                ...state,
                modules: action.payload,
                filteredModules: action.payload
            }
        case 'GET_MODULES_ERROR':
            return {
                ...state
            }
            case 'FILTER_MODULES':
            return {
                ...state,
                filteredModules: action.payload
            }
        default: 
            return state;
    }
};

export default moduleReducer;