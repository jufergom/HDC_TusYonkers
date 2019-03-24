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
                        <ul>
                        <li><a href="#">Yonkers</a></li>
                        <ul>
                            <li><a href="#">Mision</a></li>
                            <li><a href="#">Vision</a></li>
                            <li><a href="#">Valores</a></li>
                            </ul>
                        <li><a href="#">Repuestos</a>
                            <ul>
                            <li><a href="#">Mision</a></li>
                            <li><a href="#">Vision</a></li>
                            <li><a href="#">Valores</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Autos</a>
                            <ul>
                            <li><a href="#">Automatico</a></li>
                            <li><a href="#">Manual</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Contactanos</a></li>
                        <li><Link to="/Login">Iniciar Sesion</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Principal;