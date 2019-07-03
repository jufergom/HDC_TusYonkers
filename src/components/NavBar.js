import React, { Component } from "react";
import  {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import './principal.css';
import Logo from '../images/Logo1.png';
import Slideshow from "./Slideshow";

class NavBar extends Component {
    render() {
        return(
            <div>
                <header>
                    <div className="contenedor">
                        <div className="logo">
                            <img src={Logo} className="logoImage" alt="Logo_Name"/>
                        </div>
                    </div>
                </header>
                <div className="navegacion">
                    <nav>
                        <ul className="NavBar">
                        <li><Link to="/">Inicio</Link></li>
                        <li><a>Repuestos</a>
                            <ul>
                            <li><Link to="/ListCars">Carros</Link></li>
                            <li><Link to="/ListMoto">Motocicletas</Link></li>
                            </ul>
                        </li>
                        <li><li><Link to="/">Yonkers</Link></li></li>
                        <li><Link to="/Contact">Contactanos</Link></li>
                        <li><Link to="/Login">Iniciar Sesion</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default NavBar;