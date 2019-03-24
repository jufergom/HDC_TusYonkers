import React, { Component } from "react";
import  {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import './principal.css';

class Principal extends Component {
    render() {
        return(
            <div>
                <header>
                    <div className="contenedor">
                        <div className="logo">
                            <img src={require('../images/Logo1.png')} className="logoImage"/>
                        </div>
                    </div>
                </header>
                <div className="navegacion">
                    <nav>
                        <ul className="NavBar">
                        <li><a href="#">Yonkers</a></li>
                        
                        <li><a href="#">Repuestos</a>
                            <ul>
                            <li><a href="#">Carros</a></li>
                            <li><a href="#">Motos</a></li>
                            <li><a href="#">Bicicletas</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Autos</a>
                            <ul>
                            <li><a href="#">Automatico</a></li>
                            <li><a href="#">Manual</a></li>
                            </ul>
                        </li>
                        <li><Link to="/Contact">Contactanos</Link></li>
                        <li><Link to="/Login">Iniciar Sesion</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Principal;