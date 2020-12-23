import {combineReducers} from 'redux';

import CartReducer from './cartReducer';
import LocationReducer from './locationReducer';

const rootReducer = combineReducers({
    cart: CartReducer,
    geoLocation: LocationReducer
});


export default rootReducer;