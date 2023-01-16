import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  // In order to be a valid React component, this function
  //  must return a JSX object
  return <h1 title="this is a title">Hello World!</h1>

  // this syntax above is the react way of adding elements to the DOM, like
  // we would do in JS with:
  //return React.createElement('h1', {title:"this is a title"}, "Hello World!")
}

// The above component can also be declared as a class, like this:
class App2 extends React.Component {
  render() {
    return <h1 title="This works!">Hello World!</h1>
  }
}

export default App;
