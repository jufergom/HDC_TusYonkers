import React, { Component } from "react";
import {withStyles, Button,GridList,ListItem,ListItemAvatar,ListItemText,Avatar, Paper, TextField, Dialog} from "@material-ui/core";
import { connect } from "react-redux";
import NavBar from "./NavBar";

const style =theme=>({
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    paperT1:{
        ...theme.mixins.gutters(),
        position: 'absolute',
        top:'39%',
        left: '33%',
        paddingBottom: theme.spacing.unit * 2,
        paddingTop: '0.5%',
        height: 'auto',
        width: 'auto',
        alignItems: 'center'
    },
    gridList: {
        width: 400,
        height: 300,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        height: 50,
        position: 'absolute',
        bottom: '2%',
        left: '42%',
        backgroundColor: '#ffffff',
      },
      
});
const mapStateToProps = state => ({
    ItemsYonker: state.items
});

class ListBike extends Component{
    constructor(props){
        super(props);
        this.state={
            SBike:'',
        }
    }

    handleChange=(name,event)=>{
        this.setState({[name]: event.target.value});
    }

    render(){
        const{classes} = this.props;
        let filterBike = this.props.ItemsYonker.itemsBici.filter(
            (bici)=>{
                return bici.pieza.toLowerCase().indexOf(this.state.SBike.toLowerCase()) !== -1;
            }
        )
        return(
            <div>
                <div>
                    <NavBar/>
                </div>
                <Paper className={classes.paperT1}>
                        <GridList cellHeight={60} className={classes.gridList} cols={1}>
                            {filterBike.map((row)=>{
                                return <ListItem key={row.id}>
                                        <ListItemAvatar>
                                            <Avatar src={row.img} className={classes.bigAvatar}/>
                                        </ListItemAvatar>
                                        <ListItemText primary={row.nombre} secondary={row.pieza+'-'+row.modelo+'-'+row.marca}/>
                                </ListItem>
                                
                            })}
                        </GridList>
                    </Paper>
                    <div>
                        <TextField
                        className={classes.textField}
                        label="Buscar"
                        value={this.state.SBike}
                        onChange={this.handleChange.bind(this,'SBike')}
                        variant="filled"
                        />
                    </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(withStyles(style)(ListBike))