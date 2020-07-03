import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducers/reducer';

export default createStore(
    reducer, 
    undefined,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);