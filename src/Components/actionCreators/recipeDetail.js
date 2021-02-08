import axios from "axios";

export function getRecipeDetail(id){
    return async function(dispatch){
        let {data} = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
        dispatch({type : "GETRECEPIEDETAIL",details : data.recipe})
    }
}