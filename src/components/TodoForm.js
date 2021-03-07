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
      <form className="card-body" onSubmit={this.handleSubmit}>
        <div className="form-group">
          Titulo
          <input
            type="text"
            name="titulo"
            className="form-control"
            placeholder="Titulo"
            onChange={this.handleInput} />
        </div>
        <div className="form-group">
          Responsable
          <input
            type="text"
            name="responsable"
            className="form-control"
            placeholder="Responsable"
            onChange={this.handleInput} />
        </div>
        <div className="form-group">
          Descripcion
          <textarea
            name="descripcion"
            cols="25"
            rows="auto"
            className="form-control"
            placeholder="Descripcion de tarea"
            onChange={this.handleInput} ></textarea>
        </div>
        <div className="form-group">
          Prioridad tarea
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


    );
  }
}

export default TodoForm;