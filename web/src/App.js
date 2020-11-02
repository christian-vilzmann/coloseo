import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import CreateUser from "./components/create-user.component";
import CreateProject from './components/create-project.component';
import Project from './components/project.component';
import ProjectsList from './components/project-list.component'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ProjectsList} />
        <Route path="/createproject" component={CreateProject} />
        <Route path="/user" component={CreateUser} />
        <Route path="/project" component={Project} />
      </div>
    </Router>
  );
}

export default App;
