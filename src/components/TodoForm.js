import { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      titulo: "",
      responsable: "",
      descripcion: "",
      prioridad: "baja"
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    console.log("enviando datos...");
  }

  render() {
    return (
      <div className="card tarjeta-tarea">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="titulo"
              className="form-control"
              placeholder="Titulo"
              onChange={this.handleInput} />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsable"
              className="form-control"
              placeholder="Responsable"
              onChange={this.handleInput} />
          </div>
          <div className="form-group">
            <textarea
              name="descripcion"
              cols="auto"
              rows="auto"
              className="form-group"
              placeholder="Descripcion de tarea"
              onChange={this.handleInput} ></textarea>
          </div>
          <div className="form-group">
            <select
              name="prioridad"
              className="form-control"
              onChange={this.handleInput}>
              <option >baja</option>
              <option >media</option>
              <option >alta</option>
              <option >muy alta</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>

    );
  }
}

export default TodoForm;