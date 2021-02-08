
export function rootReducer(state , action){
    if(action.type === "GETRECEPIE"){
        return {...state , recipes : action.payload}
    }
    else if(action.type === "GETRECEPIEDETAIL"){
        return {...state , recepieDetail : action.details}
    }
    return state;
}