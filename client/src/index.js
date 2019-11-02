import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Header from './Header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header name="HomeMade" />, document.getElementById('title'));
ReactDOM.render(<Button name="Login" />, document.getElementById('login'));
ReactDOM.render(<Button name="Sign In" />, document.getElementById('signIn'));
ReactDOM.render(<Button name="Request Food" />, document.getElementById('requestFood'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
