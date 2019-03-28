import { combineReducers } from 'redux';
import placesReducer from './placesReducer';

const rootReducer = combineReducers({
    placesReducer: placesReducer
});

export default rootReducer;