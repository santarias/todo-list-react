import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navegacion';

import { tareas } from './tareas.json';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas
    }
  }
  render() {
    const tareas = this.state.tareas.map((tarea, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{tarea.titulo}</h3>
              <span className="badge badge-pill badge-danger ml-2 prioridad-tarea">
                {tarea.prioridad}
              </span>
            </div>
            <div className="card-body">
              <p>{tarea.descripcion}</p>
              <p className="h4">{tarea.responsable}</p>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="App" >
        <Navigation titulo="Tareas" />
        <div className="container">
          <div className="row mt-4">
            {tareas}
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
