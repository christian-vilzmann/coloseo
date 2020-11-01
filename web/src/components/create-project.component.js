import React, { Component } from 'react'

import "./component.css"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class CreateProject extends Component {

    render() {
        return (
            <div className="NewProject">
                <h2>Create...</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name of the new project</Form.Label>
                        <Form.Control type="text" placeholder="Enter project name" />
                        <Form.Text className="text-muted">
                            The name will be provide in all systems (Clarity, SSoT,...).
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Project description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Project Owner</Form.Label>
                    <Form.Control as="select">
                        <option>Müller</option>
                        <option>Maier</option>
                        <option>Smith</option>
                        <option>Papa Schlumpf</option>
                        <option>Pipi Langstrumpf</option>
                    </Form.Control>
                </Form.Group>
                <h4>Select the kind of involved components </h4>
                <p></p>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="SAP" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Non-SAP" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Middleware" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </div >
        )
    }
}
