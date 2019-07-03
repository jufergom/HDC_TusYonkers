import React, { Component } from "react";
import  {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import './principal.css';
import Logo from '../images/Logo1.png';
import Slideshow from "./Slideshow";
import NavBar from './NavBar';
import { SocialIcon } from 'react-social-icons';

class Principal extends Component {
    render() {
        return(
            <div>
                <NavBar />
				<section id="header" className="dark">
				<header>
					<h1>Bienvenido a Tus Yonkers</h1>
					<p>Un lugar donde puedes encontrar autopartes de todos los yonkers de tu ciudad</p>
				</header>
			</section>

			<section id="first" className="main">
				<header>
					<div className="container">
						<h2>Encuentra todos tus yonkers y todas las autopartes en un solo lugar</h2>
						<p style={{color: "black"}}>Visita los diferentes yonkers que existen desde la comodidad de tu casa. <br />
						Encuentra, compara y compra tus repuestos en linea.</p>
					</div>
				</header>
			</section>	

                <div>
                    <Slideshow/>
                </div>

				<section id="fourth" className="main">
				<header>
					<div className="container">
						<h2>¿Posees un yonker y deseas ser parte de nosotros? Contactanos</h2>
					</div>
				</header>
			</section>
                <section id="footer">

					<SocialIcon url="https://www.instagram.com/tusyonkershn/" bgColor="white" target="_blank" />

				<div className="copyright">
					<ul className="menu">
						<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>
				</div>
			</section>
            </div>
        );
    }
}

export default Principal;