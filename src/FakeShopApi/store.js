import { legacy_createStore, combineReducers } from 'redux';
import { productReducer } from './reducers/productReducer';

const rootReducer = combineReducers({
  products: productReducer,
});

const store = legacy_createStore(rootReducer);

export default store;