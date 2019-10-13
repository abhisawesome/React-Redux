import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux'

export const increment = ()=>{
    return{
        type: 'INCREMENT'
    };
}
export const decrement = ()=>{
    return {
        type: 'DECREMENT'
    }
}
const signin = ()=>{
    return{
        type: 'IN'
    }
}
const signout = ()=>{
    return{
        type: 'OUT'
    }
}
const initialState = {
    value : 0,
    log:false
}
const counterReducer =(state=initialState.value,action)=>{
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }

}
const loggReducer =(state = true, action)=>{
    switch(action.type)
    {
        case 'IN':
            return !state;
        case 'OUT':
            return state;
        default:
            return state;    
    }
}
const allReducer = combineReducers({
    counterReducer,loggReducer
});
export const store = createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(<Provider store={store}><App demo={1}/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
