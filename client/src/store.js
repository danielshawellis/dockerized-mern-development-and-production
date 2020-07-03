import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/reducer';

export default createStore(
    reducer, 
    undefined, 
    applyMiddleware(thunk)
);