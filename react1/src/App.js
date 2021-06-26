//@flow
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Apitext from "./components/Text/Apitext"
import Contactbox from "./components/Popup/Contact"
import Home from "./components/Home/Home"
import Blog from"./components/Blog/Blog"
import { BrowserRouter,Route,Switch} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <img src={'images/Cat-N-Dog-Logo.png'} alt="Logo" className="Catdoglogo" data-testid="logo"/>
      <Navbar/>

      <BrowserRouter>
      <Switch>
        <Route exact path ="/" ><Home/></Route>
        <Route exact path ="/Blog" ><Blog/></Route>
      </Switch>
      </BrowserRouter>
      
      <Contactbox/>
    </div>
  );
}

export default App;