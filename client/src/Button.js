import React from 'react';
import './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <button className="Button">
        <p className="Button_content">{this.props.name}</p>
      </button>
    )
  }
}