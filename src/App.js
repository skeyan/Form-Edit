/*
  Eva, Max, Bobur
  CUNY 2X BOOTCAMP
  JAN 8, 2020
*/
import React from 'react';
// import PropTypes from 'prop-types';
import Form from "./components/form";
import Folder from "./components/folder";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  };
  render() {
    return (
      <div>
        <br/>
        <Form/>
        <br/><br/>
        <Folder/>
      </div>
      
    );
  }
}

export default App;
