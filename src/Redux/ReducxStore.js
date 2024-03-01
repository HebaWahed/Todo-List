import {createStore} from "redux";
import reducer1 from "./Reducer";
const toenhancer=window._REDUX_DEVTOOLS_EXETENTION_COMPOSE__
const store= createStore(reducer1,toenhancer)

export default store;