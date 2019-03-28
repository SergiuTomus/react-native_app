import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';


const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;