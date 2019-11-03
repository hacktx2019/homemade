import React from 'react';
import Header from './Header.js';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <p><Header name="HomeMade" /></p>
        <span>
          <NavLink to="/register">
            <p className="Button_content">Register</p>
          </NavLink>
        </span>
        <span>
          <NavLink to="/sign-in">
            <p className="Button_content">Sign In</p>
          </NavLink>
        </span>
      </div>
    )
  }
}