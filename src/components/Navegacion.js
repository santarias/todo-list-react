import { render } from "react-dom";
import { Component } from "react";

class Navegacion extends Component {

  constructor(props) {
    super(props);
    this.titulo = props.titulo;
    this.lista = props.lista;
  }

  

  showForm(e) {
    e.preventDefault();
    const form = document.querySelector(".form-tarea");
    form.classList.remove("ocultar-elemento");
    const cerrarForm = document.querySelector(".enlace-formulario");
    cerrarForm.classList.remove("ocultar-elemento");
  }

  hideForm() {
    const form = document.querySelector(".form-tarea");
    form.classList.add("ocultar-elemento");
    const cerrarForm = document.querySelector(".enlace-formulario");
    cerrarForm.classList.add("ocultar-elemento");
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark barra-navegacion" >
        <a href="#" className="text-white">
          {this.titulo}
          <span className="badge badge-pill badge-light ml-2">
            {this.lista}
          </span>
        </a>
        <button type="button" className="
          btn btn-danger
          text-white 
          enlace-formulario 
          ocultar-elemento" onClick={this.hideForm}>
          Cerrar formulario
        </button>
        <button type="button" className="btn btn-info" onClick={this.showForm}>
          Agregar Tarea
        </button>
      </nav>
    );
  }
}

export default Navegacion;