import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  // customizable headers
  render() {
    return (
      <p className="Header">{this.props.name}</p>
    )
  }
}