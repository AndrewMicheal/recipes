import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipeDetail } from '../actionCreators/recipeDetail';

class Recipedetail extends Component {
    componentDidMount(){
        this.props.getRecipeDetail(this.props.match.params.id)
    }
    render() {
        console.log("Id", this.props.recipeDetails)
        return (
            <React.Fragment>
                <section className = "my-5 py-5">
                    <div className="container">
                        <div className="row">
                           {this.props.recipeDetails.length !==0 ? 
                           <div  className="col-lg-6">
                               <img src={this.props.recipeDetails.image_url} className = "w-100" alt=""/>
                           </div>
                           : <h3 className = "loading">Loading...</h3>} 
                           
                            <div className = "col-lg-6">
                            {this.props.recipeDetails.length !==0 ? 
                                <ul>
                                    {this.props.recipeDetails.ingredients.map((item,index)=>{
                                        return(
                                            <li key = {index}>{item}</li>
                                        );
                                    })}
                                </ul>
                                :null} 
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
function mapStateToProps(state){
    return{
        recipeDetails : state.recepieDetail
    }
}
export default connect(mapStateToProps, {getRecipeDetail})(Recipedetail);


