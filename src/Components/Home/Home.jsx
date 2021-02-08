import React, { Component } from 'react';
import "./home.css";

class Home extends Component {
    render() {
        return (
           <section className = "home position-relative">
               <div className="overlay position-absolute">
                   <div className="home-content position-absolute">
                       <h1>Never a Miss Recipe</h1>
                   </div>
               </div>
           </section>
        );
    }
}

export default Home;