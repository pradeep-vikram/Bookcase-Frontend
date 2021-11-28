import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from "./components/login";

class App extends Component{
  render(){
    return(
      <Router>
        <Routes>
        <Route path="/" element={<Login />}/>
        </Routes>
      </Router>
    )
  }
}
export default App;
