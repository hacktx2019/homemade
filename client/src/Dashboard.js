import React from 'react';
import Header from './Header.js';

export default class Home extends React.Component {
  render() {
    return (
      <div> 
        <p><Header name="HomeMade" /></p>
        <p>Dashboard</p>
      </div>
    )
  }
}