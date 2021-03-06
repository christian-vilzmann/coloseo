import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../mueller_logo.svg';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="logo">
          <img src={logo} width="100" height="50" />
        </div>
        <Link to="/" className="navbar-brand">COLOSEO</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/createproject" className="nav-link">Create Project</Link>
            </li>
            <li className="navbar-item">
              <Link to="/project" className="nav-link">Project</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}