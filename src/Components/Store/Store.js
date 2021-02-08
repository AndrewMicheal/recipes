import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../Reducer/Reducer";

let middleWare = [thunk];

let initState = {
    recipes : [] , 
    recepieDetail : [],
    count : 0
}

export let store = createStore(rootReducer,initState , applyMiddleware(...middleWare))
