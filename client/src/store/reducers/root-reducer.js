import { combineReducers } from 'redux';
import moduleReducer from './module-reducer';
import truckReducer from './truck-reducer';
import otherReducer from './other-reducer'

const rootReducer = combineReducers({
    modules: moduleReducer,
    trucks: truckReducer,
    other: otherReducer
});

export default rootReducer;