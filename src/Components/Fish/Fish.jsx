import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../actionCreators/recipes';

class Fish extends Component {
    componentDidMount(){
        this.props.getRecipes("fish")
    }
    goToURL = (id)=>{
        window.open(this.props.pizza[id].source_url)
    }
    goToDetail = (recipeId)=>{
        this.props.history.push(`/Recipedetail/${recipeId}`)
    }
    render() {
        return (
            <React.Fragment>
            <section className = "my-5 py-5">
                <div className="container">
                    <div className="row">
                        {this.props.fishRecipe.map((item , index)=>{
                            return(
                                <div key = {index} className = "col-lg-4 my-3">
                                    <div className="card py-4 text-center">
                                        <div className="image">
                                            <img src={item.image_url} className = "w-100" alt=""/>
                                        </div>
                                        <h2 className = "my-4">{item.title}</h2>
                                        <div className="button">
                                            <button className = "btn w-25 btn-info mr-2 text-white p-2" onClick = {()=>this.goToURL(index)}>visit</button>
                                            <button className = "btn w-25 btn-info text-white p-2" onClick = {()=>{this.goToDetail(item.recipe_id)}}>detail</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </React.Fragment>
        );
    }
}
function mapStateToProps(state){
    return{
        fishRecipe : state.recipes
    }
}
export default connect(mapStateToProps,{getRecipes})(Fish);