import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers/index';

import thunk from 'redux-thunk';

const middleware = [thunk];
const initialState = {};

const store = createStore(
    rootReducers,
    initialState,
    applyMiddleware(...middleware)
);


export default store;