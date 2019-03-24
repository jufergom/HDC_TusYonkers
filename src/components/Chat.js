import React, { Component } from "react";
import {withStyles, Button, TextField, Card, CardHeader, Avatar, CardContent, Typography} from "@material-ui/core";
import Principal from "./Principal";
import NavBar from "./NavBar";
const styles=theme=>({
    card: {
        maxWidth: 400,
        backgroundColor: '#85d9ef',
        marginTop: '0%',
        marginBottom:'10%',
        marginLeft:'35%'
      },
      avatar: {
        backgroundColor: '#a7c4e2',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        width: 250,
      },
      button: {
        margin: theme.spacing.unit,
        marginRight: '33%',
        marginTop: '10%'
      },
      HD :{
        backgroundColor: '#3c4656',
        
      },
      Text:{
          color: '#ffffff',
          textAlign: 'start',
      },
      container:{
        margin: '0 auto',
      }
});

class ChatClientService extends Component{

    render(){
        const { classes } = this.props;
        return(
            <div>
              <div className={classes.container}> 
                <header>
                  <NavBar/>
                </header>
              </div>
                <Card className={classes.card}>
                    <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>
                        D
                        </Avatar>

                    }
                    className={classes.HD}
                    title={<h4 className={classes.Text}>Contactanos segun tus necesidades. Llena nuestro formulario</h4>}
                    />
                    <CardContent>
                        <TextField 
                        className={classes.textField}
                        label = "Nombre"
                        variant="outlined"
                        />
                        <br/>
                        <TextField 
                        className={classes.textField}
                        variant="outlined"
                        label = "Apellido"
                        />
                        
                        <br/>
                        <TextField 
                        className={classes.textField}
                        variant="outlined"
                        label = "Correo Electronico"
                        />
                        <br/>
                        <TextField 
                        className={classes.textField}
                        variant="outlined"
                        label = "Telefono"
                        />
                        <TextField 
                        className={classes.textField}
                        variant="outlined"
                        label = "Pieza"
                        />
                        <br/>
                        <TextField 
                        className={classes.textField}
                        variant="outlined"
                        label = "Modelo"
                        />
                        <br/>
                        <Button variant="contained" color="primary" className={classes.button} >Enviar Info</Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(ChatClientService);