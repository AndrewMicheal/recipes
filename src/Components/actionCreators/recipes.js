import axios from "axios";

export function getRecipes(recipe){
    return async function(dispatch){
        let {data} = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`)
        dispatch({type : "GETRECEPIE",payload : data.recipes})
    }
}