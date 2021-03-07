import { render } from "react-dom";
import { Component } from "react";

class Navegacion extends Component {

  constructor(props) {
    super(props);
    this.titulo = props.titulo;
    this.lista = props.lista;
  }

  handleClick() {
    alert("algo");
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark barra-navegacion" >
        <a href="#" className="text-white">
          {this.titulo}
          <span className="badge badge-pill badge-light ml-2">
            {this.lista.length}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navegacion;