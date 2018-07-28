import React, { Component } from 'react';
import './Dashboard.css';

class AddPerson extends Component {

  render() {
    return (
      <div>
        <div className="top-nav">
          <button>Add New Person</button>
          <button className="logout-button">Logout</button>
        </div>
      </div>
    );
  }

}

export default AddPerson;
