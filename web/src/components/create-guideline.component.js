import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class GuidelinesList extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeFulfilled = this.onChangeFulfilled.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            number: 'p1.1',
            guideline: 'guideline name',
            description: 'guideline description',
            fulfilled: '',
            users: []
        }
    }



    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    onChangeFulfilled(e) {
        this.setState({
            fulfilled: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);
    }

    render() {
        return (
            <div className="guideline">
                <h3>Create New Guideline</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Guideline Group: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Guideline: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.guideline}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="formBasicCheckbox">
                        <label> Fulfilled: </label>
                        <input type="checkbox"
                            required
                            classname="form-control"
                            value={this.state.fulfilled}
                            onChange={this.onChangeFulfilled}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Guideline" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}