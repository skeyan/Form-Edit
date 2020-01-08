import React from "react";
// import PropTypes from "prop-types";
//import { withStyles, Card, CardContent, Typography, Button } from '@material-ui/core/';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            formToggle: false
        }
        this.tempFirstName = "";
        this.tempLastName = "";
    }
    handleEdit = () => {
        this.setState({
            formToggle: !this.state.formToggle
        });
    }
    handleFirstNameChange = (event) => {
        this.tempFirstName = event.target.value;
        console.log(this.tempFirstName);
    }
    //changes last name in temporary variable
    handleLastNameChange = (event) => {
        this.tempLastName = event.target.value;
        console.log(this.tempLastName);
    }
    //moves temporary variables into state
    handleSave = () => {
        this.setState({
            firstName: this.tempFirstName,
            lastName: this.tempLastName,
            formToggle: false
        });
    }
    render() {
        if(this.state.formToggle){
            return(
                <div align="center">
                    <form>
                        <input placeholder= "First name" type="text" name="firstName" onChange={this.handleFirstNameChange}/>
                        <input placeholder= "Last name"  type="text" name="lastName" onChange={this.handleLastNameChange}/>
                    </form>
                    <button onClick={this.handleEdit}>cancel</button>
                    <button onClick={this.handleSave}>save</button>
                </div>  
            );
        }
        return(
            <div align="center">
                <p>{"first name: "}{this.state.firstName}</p>
                <p>{"last name: "}{this.state.lastName}</p>
                <button onClick={this.handleEdit}>edit</button>
            </div>
        );
    }
}

export default Form;