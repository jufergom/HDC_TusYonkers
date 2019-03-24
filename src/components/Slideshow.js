import React, { Component } from 'react';
import '../components/slideshow.css';

class Slideshow extends Component {
    render() {
        return(
            <div id="slider">
                <figure>
                    <img className="I1" src={require("../images/filtros.jpg")} alt="a"/>
                    <img className="I2" src={require("../images/frenos.jpg")} alt="b"/>
                    <img className="I3" src={require("../images/rines.jpg")} alt="c"/>
                    <img className="I4" src={require("../images/amortiguadores.jpg")} alt="d"/>
                    <img className="I5" src={require("../images/carro.jpg")} alt="e"/>
                </figure>
            </div>
        )
    }
}

export default Slideshow;
