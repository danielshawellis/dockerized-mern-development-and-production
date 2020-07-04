import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import itemsReducer from './reducers/items';

export default createStore(
    itemsReducer, 
    undefined,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);