import React from "react";
// import PropTypes from "prop-types";
import { withStyles, Card, CardContent, Typography, Button } from '@material-ui/core/';

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
    //changes first name in temporary variable
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
            lastName: this.tempLastName
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
                    <Button variant="contained" onClick={this.handleEdit}>cancel</Button>
                    <Button onClick={this.handleSave}>save</Button>
                </div>  
            );
        }
        return(
            <div align="center">
                <Typography>{"first name: "}{this.state.firstName}</Typography>
                <Typography>{"last name: "}{this.state.lastName}</Typography>
                <Button onClick={this.handleEdit}>edit</Button>
            </div>
        );
    }
}

export default Form;