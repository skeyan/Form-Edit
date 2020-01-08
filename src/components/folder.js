import React from "react";
// import PropTypes from "prop-types";
import { withStyles, Card, CardContent, Typography, Button } from '@material-ui/core/';

class Folder extends React.Component {
    constructor() {
        super();
        this.state = {
            toggle : false
        }
    }
    handleToggle = () => {
        this.state.toggle = !this.state.toggle;
    }
    render() {
        if(this.state.toggle){
            <div>
                <Typography variant="h5">Home</Typography>
                <Button onClick={this.handleToggle}/>
            </div>
        }
        return(
            <div>
                <Typography variant="h5">Home</Typography>
                <Typography variant="h5">File 1</Typography>
                <Typography variant="h5">File 2</Typography>
                <Typography variant="h5">File 3</Typography>
            </div>
        );
    }

}

Folder.PropTypes = {

}