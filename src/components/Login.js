import React, { Component } from "react";
import {withStyles, Button, Paper, TextField} from "@material-ui/core";

const styles=theme=>({
    root: {
        ...theme.mixins.gutters(),
        paddingBottom: theme.spacing.unit * 2,
        height: 'auto',
        width: 300,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  HD :{
      marginTop: '30%',
  }
});

const NextPage = <div></div>;

class LoginAdminJonkers extends Component{
    constructor(pros){
        super(pros);
        this.state ={
          user:'',
          password:'',
          check: false,
        }
      }
    
      handleChange = (Name,event) =>{
        this.setState({[Name]: event.target.value});
      };
    
      CheckAccount =()=>{
        
      }

    render(){
        const { classes } = this.props;
        return(
            <div>
              {/*crcrw*/}
                <form>
                <header className={classes.HD}/>
                    <Paper className={classes.root}>
                    <TextField
                    id="U"
                    label="Username"
                    className={classes.textField}
                    value={this.state.user}
                    onChange={this.handleChange.bind(this,'user')}
                    margin="normal"
                    />
                    <br/>
                    <TextField
                    id="P"
                    label="Password"
                    className={classes.textField}
                    value={this.state.password}
                    onChange={this.handleChange.bind(this,'password')}
                    margin="normal"
                    />

                    <br/>

                    <Button variant="contained" color="primary" className={classes.button}>Enter</Button>
                    </Paper>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(LoginAdminJonkers);