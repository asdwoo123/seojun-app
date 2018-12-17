import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import socketReducer from './socketReducer';

const rootReducer = combineReducers({
    opc: socketReducer
});

export default createStore(
    rootReducer,
    applyMiddleware(thunk)
);

