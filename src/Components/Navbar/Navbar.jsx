import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <header className = "position-fixed w-100">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <span className="navbar-brand link-color" href="/">Recipes</span>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon btn-toggler-icon"></span>
                                    <span className="navbar-toggler-icon btn-toggler-icon"></span>
                                    <span className="navbar-toggler-icon btn-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link link-color" to="/pizza">Pizza</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link link-color" to="/fish">Fish</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link link-color" to="/IceCream">IceCream</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link link-color" to="/chocolate">Chocolate</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link link-color" to="/beef">Beef</Link>
                                    </li>     
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Navbar;