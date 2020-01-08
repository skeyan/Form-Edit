/*
  Eva, Max, Bobur
  CUNY 2X BOOTCAMP
  JAN 8, 2020
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class EditFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: props.firstname,
      lastname: props.lastname
    }
  }

  render() {
    return(
      <div> 
        <div> </div> 
        <div> </div>
        <button>
          <p>Edit</p>
        </button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <EditFormComponent firstname="first name" lastname="last name"/>
    );
  }
}



export default App;
