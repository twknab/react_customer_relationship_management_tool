import React, { Component } from 'react';
import logo from './logo.svg';
import './Dashboard.css';
import AddPerson from './AddPerson';
import AllPeople from './AllPeople';

class Dashboard extends Component {
  render() {
    return (
      <div className="Crm">
        <header className="Crm-header">
          <img src={logo} className="Crm-logo" alt="logo" />
          <h1 className="Crm-title">LinkUP</h1>
          <h6 className="Crm-subtitle"><a href="http://sasquat.ch" target="_new">By Sasquat.ch</a></h6>
        </header>
        <div className="Add-person">
          <AddPerson />
        </div>
        <div className="All-people">
          <AllPeople />
        </div>
      </div>
    );
  }
}

export default Dashboard;
