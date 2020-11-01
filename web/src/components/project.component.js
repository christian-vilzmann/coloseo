import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default class Project extends Component {

    render() {
        return (
            <div>
                <Form>
                    <h2>Project Name</h2>
                    <p>project description</p>
                    <p>Project Owner</p>
                    <p>link to Clarity</p>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Architecture Guidelines
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey="0">

                                <CardDeck>
                                    <Card
                                        bg='danger'
                                        style={{ width: '18rem' }}>
                                        <Card.Header>Architecture</Card.Header>
                                        <Card.Body>
                                            <Card.Title>SAP First</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        </Card.Text>
                                            <InputGroup size="sm" className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroup-sizing-sm">Comment</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl aria-label="small" aria-describedby="inputGroup-sizing-sm" />
                                            </InputGroup>

                                            <Button variant="dark">Agreed</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card
                                        bg='success'
                                        style={{ width: '18rem' }}>
                                        <Card.Header>Architecture</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Document your architecture</Card.Title>
                                            <Card.Text>
                                                Create a component and aruntime diagram of your solution. You can use Arc42 (https://www.arc42.com) as a template.
                                        </Card.Text>
                                            <InputGroup size="sm" className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroup-sizing-sm">Comment</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl aria-label="small" aria-describedby="inputGroup-sizing-sm" />
                                            </InputGroup>

                                            <Button variant="dark">Agreed</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card
                                        bg='danger'
                                        style={{ width: '18rem' }}>
                                        <Card.Header>Architecture</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Fit of devlopment guidelines</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        </Card.Text>
                                            <InputGroup size="sm" className="mb-3">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroup-sizing-sm">Comment</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl aria-label="small" aria-describedby="inputGroup-sizing-sm" />
                                            </InputGroup>

                                            <Button variant="dark">Agreed</Button>
                                        </Card.Body>
                                    </Card>
                                </CardDeck>

                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Security Guidelines
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <CardDeck>
                                    <Card
                                        bg='danger'
                                        style={{ width: '18rem' }}>
                                        <Card.Header>Security</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Sec guidelines one</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        </Card.Text>
                                            <Button variant="dark">Agreed</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card
                                        bg='danger'
                                        style={{ width: '18rem' }}>
                                        <Card.Header>Security</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Sec guidelines two</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                            </Card.Text>
                                            <Button variant="dark">Agreed</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card
                                        bg='success'
                                        style={{ width: '18rem' }}>
                                        <Card.Header>Security</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Sec guidelines three</Card.Title>
                                            <Card.Text>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                            </Card.Text>

                                            <Button variant="dark">Agreed</Button>
                                        </Card.Body>
                                    </Card>
                                </CardDeck>
                            </Accordion.Collapse>
                        </Card>

                    </Accordion>



                </Form>
            </div>
        )
    }

}