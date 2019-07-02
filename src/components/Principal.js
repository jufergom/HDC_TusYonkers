import React, { Component } from "react";
import  {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import './principal.css';
import Logo from '../images/Logo1.png';
import Slideshow from "./Slideshow";
import NavBar from './NavBar';

class Principal extends Component {
    render() {
        return(
            <div>
                <NavBar />
                <div>
                    <Slideshow/>
                </div>
            </div>
        );
    }
}

export default Principal;