import React from 'react';
import Button from './Button.js';

class App extends React.Component {
  render() {
    return (
      // All the componenets of our web application
      <div>
        <Button name="Login" />
        <Button name="Sign In" />
        <Button name="Request Food" />
      </div>
    )
  }
}

export default App;