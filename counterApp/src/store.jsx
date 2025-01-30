import {createStore} from "redux";
import counterReduser from './Services/Reducers/counterReduser';
const store = createStore(counterReduser)

export default store;