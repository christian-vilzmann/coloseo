import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class GuidelinesList extends Component {
    render() {
        return (
            <div>
                <h3>Guidelines overview</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Number</th>
                            <th>Guideline</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Fulfilled</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* { this.exerciseList() } */}
                    </tbody>
                </table>
            </div>
        )
    }
}