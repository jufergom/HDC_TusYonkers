import React, { Component } from "react";
import {withStyles, Button, Paper, TextField} from "@material-ui/core";
import imgL from '../images/Logo1.png'
import Link from "react-router-dom/Link";
import { Redirect } from "react-router-dom";

const styles=theme=>({
    root: {
        ...theme.mixins.gutters(),
        paddingBottom: theme.spacing.unit * 2,
        height: 'auto',
        width: 250,
        alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    height: 50,
  },
  button: {
    margin: theme.spacing.unit,
  },
  HD :{
      marginTop: '5%'
  },
  imageLog:{
    width: '50%',
    height: '50%',
  },
  forms:{
    alignItems: 'center',
    position: 'absolute',
    left: '40%'
  }
});

const NextPage = <Redirect to="/Admin"/>

class LoginAdminJonkers extends Component{
    constructor(pros){
        super(pros);
        this.state ={
          user:'',
          password:'',
          
        }
      }
    
      handleChange = (Name,event) =>{
        this.setState({[Name]: event.target.value});
      };
    
      CheckAccount =()=>{
       /*if(this.state.test===false){
          this.setState({test: true})
        }else{
          this.setState({test: false})
        }*/
      }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <form>
                <header className={classes.HD}>
                  <img src={imgL} className={classes.imageLog} alt="Logo"/>
                </header>

                <div className={classes.forms}>
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

                      <Button variant="contained" color="primary" className={classes.button} onClick={this.CheckAccount.bind(this)} >Entrar</Button>
                      <Button variant="contained" color="primary" component={Link} to="/" className={classes.button}>Atras</Button>
                      </Paper>
                    </div>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(LoginAdminJonkers);