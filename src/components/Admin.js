import React, { Component } from "react";
import {withStyles, Button, Paper, TextField, Dialog, DialogTitle, DialogContent, DialogActions, ListItem, ListItemAvatar, Avatar, ListItemText} from "@material-ui/core";
import ACTIONS from "../modules/action";
import { connect } from "react-redux";
import imgL from '../images/Logo1.png';
import GridList from '@material-ui/core/GridList';

const styles =theme=>({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        height: 50,
    },
    button: {
        margin: theme.spacing.unit,
      },
    b1:{
        position: 'absolute',
        top: '5%',
        left: '10%'
    },
    b2:{
        position: 'absolute',
        top: '5%',
        left: '29%'
    },
    b3:{
        position: 'absolute',
        top: '5%',
        left: '49%'
    },
    b4:{
        position: 'absolute',
        top: '5%',
        left: '72%'
    },
    buttonsArr:{
        alignItems: 'center',
    },
    HD :{
        marginTop: '0%',
    },
    imageLog:{
      width: '50%',
      height: '50%',
    },
    gridList: {
        width: 250,
        height: 300,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    paperT1:{
        ...theme.mixins.gutters(),
        position: 'absolute',
        top:'35%',
        left: '1%',
        paddingBottom: theme.spacing.unit * 2,
        paddingTop: '0.5%',
        height: 'auto',
        width: 'auto',
        alignItems: 'center'
    },
    paperT2:{
        ...theme.mixins.gutters(),
        position: 'absolute',
        top:'35%',
        left: '25%',
        paddingBottom: theme.spacing.unit * 2,
        paddingTop: '0.5%',
        height: 'auto',
        width: 'auto',
        alignItems: 'center'
    },
    paperT3:{
        ...theme.mixins.gutters(),
        position: 'absolute',
        top:'35%',
        left: '49%',
        paddingBottom: theme.spacing.unit * 2,
        paddingTop: '0.5%',
        height: 'auto',
        width: 'auto',
        alignItems: 'center'
    },
    paperT4:{
        ...theme.mixins.gutters(),
        position: 'absolute',
        top:'35%',
        left: '73%',
        paddingBottom: theme.spacing.unit * 2,
        paddingTop: '0.5%',
        height: 'auto',
        width: 'auto',
        alignItems: 'center'
    },
    list:{
        alignItems: 'center',
        textAlign: 'center',
    },
    textField1: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        height: 50,
        position: 'absolute',
        bottom: '7%',
        left: '4%'
      },
      textField2: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        height: 50,
        position: 'absolute',
        bottom: '7%',
        left: '28%'
      },
      textField3: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        height: 50,
        position: 'absolute',
        bottom: '7%',
        left: '54%'
      },
      textField4: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        height: 50,
        position: 'absolute',
        bottom: '7%',
        left: '75%'
      },
});
const mapStateToProps = state => ({
    ItemsYonker: state.items
});

const mapDispatchToProps = dispatch => ({
    createItemCar: (i,n,p,mo,mar) =>dispatch(ACTIONS.createItemCar(i,n,p,mo,mar)),
    createItemBike: (i,n,p,mo,mar) =>dispatch(ACTIONS.createItemBike(i,n,p,mo,mar)),
    createItemMoto: (i,n,p,mo,mar) =>dispatch(ACTIONS.createItemMoto(i,n,p,mo,mar)),
    createItemYonk: (i,n,u) =>dispatch(ACTIONS.createItemYonk(i,n,u)),
    /*createItem: item => dispatch(ACTIONS.createItem(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id))*/
});

class AdminFrom extends Component{
    constructor(props){
        super(props);
        this.state={
            open1: false,
            open2:false,
            open3: false,
            open4: false,
            imagen:'',
            nombre:'',
            pieza:'',
            modelo:'',
            marca:'',
            ubicacion:'',
            Scar:'',
            Sbike:'',
            Smoto:'',
            Syon:'',
        }
    }
    setAllStateEmpty =()=>{
        this.setState({imagen:'',nombre:'',pieza:'',modelo:'',marca: '',ubicacion: '',})
    }

    handleChange=(name,event)=>{
        this.setState({[name]: event.target.value});
    }

    submitToStateCars=()=>{
        this.props.createItemCar(this.state.imagen,this.state.nombre,this.state.pieza,this.state.modelo,this.state.marca);
        this.handleClose1();
        this.setAllStateEmpty();
    }

    submitToStateBike=()=>{
        this.props.createItemBike(this.state.imagen,this.state.nombre,this.state.pieza,this.state.modelo,this.state.marca);
        this.handleClose2();
        this.setAllStateEmpty();
    }

    submitToStateMoto=()=>{
        this.props.createItemMoto(this.state.imagen,this.state.nombre,this.state.pieza,this.state.modelo,this.state.marca);
        this.handleClose3();
        this.setAllStateEmpty();
    }

    submitToStateYonk=()=>{
        this.props.createItemYonk(this.state.imagen,this.state.nombre,this.state.ubicacion);
        this.handleClose4();
        this.setAllStateEmpty();
    }

    handleClickOpen1 = () => {
        this.setState({ open1: true });
    };

    handleClose1 = () => {
        this.setState({ open1: false });
    };

    handleClickOpen2 = () => {
        this.setState({ open2: true });
    };

    handleClose2 = () => {
        this.setState({ open2: false });
    };

    handleClickOpen3 = () => {
        this.setState({ open3: true });
    };

    handleClose3 = () => {
        this.setState({ open3: false });
    };

    handleClickOpen4 = () => {
        this.setState({ open4: true });
    };

    handleClose4 = () => {
        this.setState({ open4: false });
    };

    

    render(){
        let filterCar = this.props.ItemsYonker.itemsCarros.filter(
            (carro)=>{
                return carro.pieza.toLowerCase().indexOf(this.state.Scar.toLowerCase()) !== -1;
            }
        )

        let filterBike = this.props.ItemsYonker.itemsBici.filter(
            (bici)=>{
                return bici.pieza.toLowerCase().indexOf(this.state.Sbike.toLowerCase()) !== -1;
            }
        )

        let filterMoto = this.props.ItemsYonker.itemsMotos.filter(
            (moto)=>{
                return moto.pieza.toLowerCase().indexOf(this.state.Smoto.toLowerCase()) !== -1;
            }
        )

        let filterYonk = this.props.ItemsYonker.yonkers.filter(
            (yonk)=>{
                return yonk.nombre.toLowerCase().indexOf(this.state.Syon.toLowerCase()) !== -1;
            }
        )


        const { classes } = this.props;
        return(
            <div>
                <header className={classes.HD}>
                  <img src={imgL} className={classes.imageLog} alt="Logo"/>
                </header>

                <div className={classes.buttonsArr}>

                    <div className={classes.b1}>
                        <Button variant="contained" color="primary" onClick={this.handleClickOpen1.bind(this)} className={classes.button}>Agregar Partes Carro</Button>
                    </div>

                    <div className={classes.b2}>
                    <Button variant="contained" color="primary" onClick={this.handleClickOpen2.bind(this)} className={classes.button}>Agregar Partes Bicicleta</Button>
                    </div>

                    <div className={classes.b3}>
                    <Button variant="contained" color="primary" onClick={this.handleClickOpen3.bind(this)} className={classes.button}>Agregar Partes Motocicleta</Button>
                    </div>

                    <div className={classes.b4}>
                    <Button variant="contained" color="primary" onClick={this.handleClickOpen4.bind(this)} className={classes.button}>Agregar Yonker</Button>
                    </div>

                </div>
                <div>
                    <Dialog
                    open={this.state.open1}
                    onClose={this.handleClose1.bind(this)}
                    aria-labelledby="form-dialog-title"
                    >
                    <DialogTitle id="form-dialog-title">Agregue una pieza de Carro</DialogTitle>
                    <DialogContent>
                        <TextField
                        label="Nombre Yonker"
                        className={classes.textField}
                        value={this.state.nombre}
                        onChange={this.handleChange.bind(this,'nombre')}
                        margin="normal"
                        />
                        <br/>
                        <TextField
                        label="Imagen de la pieza"
                        className={classes.textField}
                        value={this.state.imagen}
                        onChange={this.handleChange.bind(this,'imagen')}
                        margin="normal"
                        />
                        <br/>
                        <TextField
                        label="Nombre de la pieza"
                        className={classes.textField}
                        value={this.state.pieza}
                        onChange={this.handleChange.bind(this,'pieza')}
                        margin="normal"
                        />
                        <br/>
                        <TextField
                        label="Modelo de la pieza"
                        className={classes.textField}
                        value={this.state.modelo}
                        onChange={this.handleChange.bind(this,'modelo')}
                        margin="normal"
                        />
                        <br/>
                        <TextField
                        label="Marca de la pieza"
                        className={classes.textField}
                        value={this.state.marca}
                        onChange={this.handleChange.bind(this,'marca')}
                        margin="normal"
                        />
                        <br/>

                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" className={classes.button} onClick={this.handleClose1.bind(this)}>Cancelar</Button>
                        <Button variant="contained" className={classes.button} onClick={this.submitToStateCars.bind(this)}>Agegar Pieza</Button>
                    </DialogActions>
                    </Dialog>
                </div>

                <div>
                <Dialog
                    open={this.state.open2}
                    onClose={this.handleClose2.bind(this)}
                    aria-labelledby="form-dialog-title"
                    >
                    <DialogTitle id="form-dialog-title">Agregue una pieza de Bicicleta</DialogTitle>
                    <DialogContent>
                        <TextField
                        label="Nombre Yonker"
                        className={classes.textField}
                        value={this.state.nombre}
                        onChange={this.handleChange.bind(this,'nombre')}
                        margin="normal"
                        />
                        <br/>
                        <TextField
                        label="Imagen de la pieza"
                        className={classes.textField}
                        value={this.state.imagen}
                        onChange={this.handleChange.bind(this,'imagen')}
                        margin="normal"
                        />
                        <br/>
                        <TextField
                        label="Nombre de la pieza"
                        className={classes.textField}
                        value={this.state.pieza}
                        onChange={this.handleChange.bind(this,'pieza')}
                        margin="normal"
                        />
                        <br/>
                        <TextField
                        label="Modelo de la pieza"
                        className={classes.textField}
                        value={this.state.modelo}
                        onChange={this.handleChange.bind(this,'modelo')}
                        margin="normal"
                        />
                        <br/>
                        <TextField
                        label="Marca de la pieza"
                        className={classes.textField}
                        value={this.state.marca}
                        onChange={this.handleChange.bind(this,'marca')}
                        margin="normal"
                        />
                        <br/>

                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" className={classes.button} onClick={this.handleClose2.bind(this)}>Cancelar</Button>
                        <Button variant="contained" className={classes.button} onClick={this.submitToStateBike.bind(this)}>Agegar Pieza</Button>
                    </DialogActions>
                    </Dialog>
                </div>

                <div>
                <Dialog
                    open={this.state.open3}
                    onClose={this.handleClose3.bind(this)}
                    aria-labelledby="form-dialog-title"
                    >
                    <DialogTitle id="form-dialog-title">Agregue una pieza de Moto</DialogTitle>
                    <DialogContent>
                        <TextField
                        label="Nombre Yonker"
                        className={classes.textField}
                        value={this.state.nombre}
                        onChange={this.handleChange.bind(this,'nombre')}
                        margin="normal"
                        />
                        <br/>
                        <TextField
                        label="Imagen de la pieza"
                        className={classes.textField}
                        value={this.state.imagen}
                        onChange={this.handleChange.bind(this,'imagen')}
                        margin="normal"
                        />
                        <br/>
                        <TextField
                        label="Nombre de la pieza"
                        className={classes.textField}
                        value={this.state.pieza}
                        onChange={this.handleChange.bind(this,'pieza')}
                        margin="normal"
                        />
                        <br/>
                        <TextField
                        label="Modelo de la pieza"
                        className={classes.textField}
                        value={this.state.modelo}
                        onChange={this.handleChange.bind(this,'modelo')}
                        margin="normal"
                        />
                        <br/>
                        <TextField
                        label="Marca de la pieza"
                        className={classes.textField}
                        value={this.state.marca}
                        onChange={this.handleChange.bind(this,'marca')}
                        margin="normal"
                        />
                        <br/>

                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" className={classes.button} onClick={this.handleClose3.bind(this)}>Cancelar</Button>
                        <Button variant="contained" className={classes.button} onClick={this.submitToStateMoto.bind(this)}>Agegar Pieza</Button>
                    </DialogActions>
                    </Dialog>
                </div>

                <div>
                <Dialog
                    open={this.state.open4}
                    onClose={this.handleClose4.bind(this)}
                    aria-labelledby="form-dialog-title"
                    >
                    <DialogTitle id="form-dialog-title">Agregue un Yonker </DialogTitle>
                    <DialogContent>
                        <TextField
                        label="Nombre Yonker"
                        className={classes.textField}
                        value={this.state.nombre}
                        onChange={this.handleChange.bind(this,'nombre')}
                        margin="normal"
                        />
                        <br/>
                        <TextField
                        label="Imagen del lugar"
                        className={classes.textField}
                        value={this.state.imagen}
                        onChange={this.handleChange.bind(this,'imagen')}
                        margin="normal"
                        />
                        <br/>
                        <TextField
                        label="Ubicacion"
                        className={classes.textField}
                        value={this.state.ubicacion}
                        onChange={this.handleChange.bind(this,'ubicacion')}
                        margin="normal"
                        />
                        <br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" className={classes.button} onClick={this.handleClose4.bind(this)}>Cancelar</Button>
                        <Button variant="contained" className={classes.button} onClick={this.submitToStateYonk.bind(this)}>Agegar Yonker</Button>
                    </DialogActions>
                    </Dialog>
                </div>
            <div className={classes.list}>
                <div>
                    <Paper className={classes.paperT1}>
                        <GridList cellHeight={60} className={classes.gridList} cols={1}>
                            {filterCar.map((row)=>{
                                return <ListItem key={row.id}>
                                        <ListItemAvatar>
                                            <Avatar src={row.img} className={classes.bigAvatar}/>
                                        </ListItemAvatar>
                                        <ListItemText primary={row.nombre} secondary={row.pieza+'-'+row.modelo+'-'+row.marca}/>
                                </ListItem>
                                
                            })}
                        </GridList>
                    </Paper>
                </div>
                <div>
                    <Paper className={classes.paperT2}>
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
                </div>
                <div>
                    <Paper className={classes.paperT3}>
                        <GridList cellHeight={60} className={classes.gridList} cols={1}>
                            {filterMoto.map((row)=>{
                                return <ListItem key={row.id}>
                                        <ListItemAvatar>
                                            <Avatar src={row.img} className={classes.bigAvatar}/>
                                        </ListItemAvatar>
                                        <ListItemText primary={row.nombre} secondary={row.pieza+'-'+row.modelo+'-'+row.marca}/>
                                </ListItem>
                                
                            })}
                        </GridList>
                    </Paper>
                </div>
                <div>
                    <Paper className={classes.paperT4}>
                        <GridList cellHeight={60} className={classes.gridList} cols={1}>
                            {filterYonk.map((row)=>{
                                return <ListItem key={row.id}>
                                        <ListItemAvatar>
                                            <Avatar src={row.img} className={classes.bigAvatar}/>
                                        </ListItemAvatar>
                                        <ListItemText primary={row.nombre} secondary={row.ubicacion}/>
                                </ListItem>
                            })}
                        </GridList>
                    </Paper>
                </div>

                <div>
                    <TextField
                    className={classes.textField1}
                    value={this.state.Scar}
                    onChange={this.handleChange.bind(this,'Scar')}
                    label="Nombre de la pieza"
                    />

                    <TextField
                    className={classes.textField2}
                    value={this.state.Sbike}
                    onChange={this.handleChange.bind(this,'Sbike')}
                    label="Nombre de la pieza"
                    />

                    <TextField
                    className={classes.textField3}
                    value={this.state.Smoto}
                    onChange={this.handleChange.bind(this,'Smoto')}
                    label="Nombre de la pieza"
                    />

                    <TextField
                    className={classes.textField4}
                    value={this.state.Syon}
                    onChange={this.handleChange.bind(this,'Syon')}
                    label="Nombre del Yonker"
                    />
                </div>
            </div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(AdminFrom));