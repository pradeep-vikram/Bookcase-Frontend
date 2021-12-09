import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from "./components/login";
import AddBook from "./components/addBook";

class App extends Component{
  render(){
    return(
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/addBook" element={<AddBook />}/>
        </Routes>
      </Router>
    )
  }
}
export default App;
