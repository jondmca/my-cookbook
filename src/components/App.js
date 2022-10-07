import React from "react";
import { Switch, Route } from "react-router-dom";
import '../App.css';
import About from "./About";
import Links from "./Links";
import Home from "./Home";
import NavBar from "./NavBar";


function App() {

  return(
    <div>
      <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/links">
        <Links />
      </Route>
    </Switch>
    </div>
  );
};
    
    
export default App;
      
        
        
