import { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      responsible: "",
      description: "",
      priority: "baja"
    }
  }



  render() {
    return (
      <div className="card tarjeta-tarea">
        <form className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Titulo" />
          </div>
          <div className="form-group">
            <input type="text" name="responsible"
              className="form-control" placeholder="Responsable" />
          </div>
          <div className="form-group">
            <textarea name="description" cols="25" rows="3"
              className="form-group" placeholder="Descripcion de tarea"></textarea>
          </div>
          <div className="form-group">
            <select name="priority" className="form-control">
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