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
    }
    handleEdit = () => {
        this.setState({
            formToggle: !this.state.formToggle
        });
    }
    // handleChange = () => {

    // }
    handleSave = () => {
        this.setState({
            
        })
    }
    render() {
        if(this.state.formToggle){
            return(
                <div align="center">
                    <form>
                        <input placeholder= "First name" type="text" name="firstName" onChange={this.handleChange}/>
                        <input placeholder= "Last name"  type="text" name="lastName" onChange={this.handleChange}/>
                    </form>
                    <Button variant="contained" onClick={this.handleEdit}>cancel</Button>
                    {/* <Button>save</Button> */}
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