import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Project = props => (
    <tr>
        <td>{props.project.username}</td>
        <td>{props.project.name}</td>
        <td>{props.project.description}</td>
        <td>{props.project.template}</td>
        <td>
            <Link to={"/edit/" + props.project._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProject(props.project._id) }}>delete</a>
        </td>
    </tr>
)

export default class ProjectsList extends Component {
    constructor(props) {
        super(props);

        this.deleteProject = this.deleteProject.bind(this)

        this.state = { projects: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/projects/')
            .then(response => {
                this.setState({ projects: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteProject(id) {
        axios.delete('http://localhost:4000/projectss/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            project: this.state.projects.filter(el => el._id !== id)
        })
    }

    projectList() {
        return this.state.projects.map(currentproject => {
            return <Project project={currentproject} deleteproject={this.deleteProject} key={currentproject._id} />;
        })
    }

    render() {
        return (
            <div>
                <h3>My Projects</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Owner</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Scope</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.projectList()}
                    </tbody>
                </table>
            </div>
        )
    }
}