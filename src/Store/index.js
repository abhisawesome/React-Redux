import counterReducer from './reducer';
import { createStore, combineReducers } from 'redux';

const allReducer = combineReducers({
    counterReducer
});

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;