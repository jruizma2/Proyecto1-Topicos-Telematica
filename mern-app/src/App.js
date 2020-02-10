import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <Navbar />
    <br />
    <Route path ="/" exact component={CoordinatesList} />
    <Route path ="/" exact component={CoordinatesList} />
    <Route path ="/" exact component={CoordinatesList} />
    <Route path ="/" exact component={CoordinatesList} />
    </Router>
  );
}

export default App;
