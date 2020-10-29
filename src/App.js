import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import CreateUser from "./components/create-user.component";
import GuidelinesList from "./components/guidelines-list.component"
import CreateGuideline from "./components/create-guideline.component"


function App() {
  return (

    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/user" component={CreateUser} />
        <Route path="/guidelines" component={GuidelinesList} />
        <Route path="/createguideline" component={CreateGuideline} />
      </div>
    </Router>
  );
}

export default App;
