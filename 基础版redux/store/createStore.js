import {createStore} from 'redux';
import reducer from './allReducer';
const store = createStore(reducer);
export default store;
