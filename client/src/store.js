import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Reducers
import itemsReducer from './reducers/items';

// Combine reducers and specify namespaces
const reducers = { items: itemsReducer };
const combinedReducers = combineReducers(reducers);

// Set initial state (often handled within reducers)
const initialState = undefined;

// Create enhancer
const middleware = [ thunk ];
const appliedMiddleware = applyMiddleware( ...middleware );
const composedEnhancer = composeWithDevTools(appliedMiddleware);

// Create and export store
export default createStore(combinedReducers, initialState, composedEnhancer);