import React, { Component } from 'react';
import './Dashboard.css';

class AllPeople extends Component {

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Created</th>
              <th>Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tim Knab</td>
              <td>tim@gmail.com</td>
              <td>(206) 271-1443</td>
              <td>March 1st, 2018</td>
              <td>July 20th, 2018</td>
              <td><a>Edit</a> | <a>View</a> | <a>Delete</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

}

export default AllPeople;
