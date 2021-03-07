import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navegacion';
import TodoForm from "./components/TodoForm";

import { tareas } from './tareas.json';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(tarea){
    const form = document.querySelector(".form-tarea");  
    const cerrarForm = document.querySelector(".enlace-formulario");
    cerrarForm.classList.add("ocultar-elemento");  
    form.classList.add("ocultar-elemento");
    this.setState({
      tareas: [...this.state.tareas, tarea]
    });
  }



  render() {
    const printaTareas = this.state.tareas.map((tarea, i) => {
      return (
        <div className="col-3 tarjeta-tarea">
          <div className="card mt-4 tarjeta-tarea">
            <div className="card-header">
              <h3>{tarea.titulo}</h3>
              <span className="badge badge-pill badge-danger ml-2 
                prioridad-tarea">
                {tarea.prioridad}
              </span>
            </div>
            <div className="card-body">
              <p>{tarea.descripcion}</p>
              <span className="tarea-responsable h5">
                {tarea.responsable}
              </span>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="App mb-4" >
        <Navigation titulo="Tareas" lista={this.state.tareas} />
        <div className="container contenedor-tarea">
          <div className="card bg-dark tarjeta-tarea form-tarea ocultar-elemento">
            <TodoForm onAddTodo={this.handleAddTodo}/>
          </div>
          <div className="row mt-4">
            {printaTareas}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
