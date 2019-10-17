import { combineReducers } from 'redux';
import moduleReducer from './module-reducer';
import truckReducer from './truck-reducer';

const rootReducer = combineReducers({
    modules: moduleReducer,
    trucks: truckReducer
});

export default rootReducer;