import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../actionCreators/recipes';


class Icecream extends Component {
    componentDidMount(){
        this.props.getRecipes("ice cream")
    }
    goToURL = (id)=>{
        window.open(this.props.icecream[id].source_url)
    }
    goToDetail = (recipeId)=>{
        this.props.history.push(`/Recipedetail/${recipeId}`)
    }
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <section className = "my-5 py-5">
                    <div className="container">
                        <div className="row">
                            {this.props.icecream.map((item , index)=>{
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
        icecream : state.recipes
    }
}
export default connect(mapStateToProps,{getRecipes})(Icecream);