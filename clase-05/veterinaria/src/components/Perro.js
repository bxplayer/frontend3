import React from "react";

class Perro extends React.Component {
    render() {
        return ( 
            <div>
            <h1>{this.props.nombre}</h1>
                <ul>
                    <li>
                        <span>Edad:</span> <span>{this.props.edad}</span>
                    </li>
                    <li>
                        <span>Sexo:</span> <span>{this.props.sexo}</span>
                    </li>
                    <li>
                        <span>Raza:</span> <span>{this.props.raza}</span>
                    </li>
                    <li>
                        <span>Tamaño:</span> <span>{this.props.tamano}</span>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Perro;