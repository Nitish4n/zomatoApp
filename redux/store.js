import {createStore, compose} from 'redux'
import rootReducer from '../redux/reducer/index';



const store = createStore(rootReducer)


export default store;