
//import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../src/App.css";
import Routes from "../src/components/Routes";
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Data from './components/Data'
import Cart from './components/Cart'


class App extends Component {
  render() {
    let { handleprops } = this.props;
    
    return (
      
       <BrowserRouter>
            <div className="App">
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/data" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/data">Shop</Link></li>
                       
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                    <ul className="right">
                    <a style={{ cursor: 'pointer' }} onClick={this.props.loggingout}>Log Out</a>.     
                    </ul>
                </div>
            </nav>
          
             
                <Switch>

                    <Route  path="/data" component={Data}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
           
       </BrowserRouter>
     
    );
  }
}

export default App;
