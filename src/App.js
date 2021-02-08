import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Pizza from './Components/Pizza/Pizza.jsx';
import chocolate from './Components/Chocolate/chocolate.jsx';
import Icecream from './Components/IceCream/Icecream.jsx';
import Beef from './Components/Beef/Beef.jsx';
import Fish from './Components/Fish/Fish.jsx';
import { Switch , Route , Redirect } from 'react-router-dom';
import notfound from './Components/NotFound/notfound.jsx';
import Recipedetail from './Components/ReceipeDetail/Recipedetail.jsx';
import Footer from './Components/Footer/Footer.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Home/>
        <Switch>
          <Route path = "/pizza" component = {Pizza}/>
          <Route path = "/fish" component = {Fish}/>
          <Route path = "/chocolate" component = {chocolate}/>
          <Route path = "/IceCream" component = {Icecream}/>
          <Route path = "/Recipedetail/:id" component = {Recipedetail}/>
          <Route path = "/beef" component = {Beef}/>
          <Route path = "/notfound" component = {notfound}/>
          <Route path = "/" exact component = {Pizza}/>
          <Redirect to = "/notfound"/>
        </Switch>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;