import React, { Component } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const username = {
      username: this.state.username
    }

    console.log(username);


    axios.post('http://localhost:4000/users/add', username)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })

  }

  render() {
    return (
      <div className="form-container">
        <h3>Create New User</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Group >
            <Form.Label>Username</Form.Label>
            <Form.Control
              requried
              type="text"
              placeholder="Enter username"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
            <Form.Text className="text-muted">
              The user´s are owners of projects or can be added as project member.
              </Form.Text>

          </Form.Group>
        </Form>

        <Button variant="dark" type="submit" onClick={this.onSubmit} >
          Create User
        </Button>

      </div >
    )
  }
}