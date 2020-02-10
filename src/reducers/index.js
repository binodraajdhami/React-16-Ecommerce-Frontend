import { combineReducers } from 'redux';
import productReducers from './product.reducer';

const reducers = combineReducers({
    product: productReducers
})

export default reducers;