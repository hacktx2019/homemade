import React from 'react';
import Header from './Header.js';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <p><Header name="HomeMade" /></p>
        <p>Sign in now</p>
        <NavLink to="/dashboard">
          <p>Dashboard</p>
        </NavLink>
      </div>
    )
  }
}