import React, { Component } from "react";
import { browserHistory } from "react-router-3";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      text: "",
      anio: "",
      nconsejo: "",
      fechacon: "",
      resdecanal: "",
      fechard: "",
      resrectoral: "",
      fecharr: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState(prevState => ({
      list: prevState.list.concat(this.state.text),
      text: "",
      anio: "",
      nconsejo: "",
      fechacon: "",
      resdecanal: "",
      fechard: "",
      resrectoral: "",
      fecharr: ""
    }));
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  RegistrarPresupuesto = e => {
    browserHistory.push("/vista/registrarPresupuesto");
    // console.log("Vista nueva");
    e.preventDefault();
  };

  ModuloPresupuesto = e => {
    browserHistory.push("/vista/moduloPresupuesto");
    // console.log("Vista nueva");
    e.preventDefault();
  };

  render() {
    return (
      <div className="text-center">
        <h2>Módulo de Presupuesto</h2>
        <hr />
        <div className="container ">
          <div className="card">
            <form onSubmit={this.handleSubmit} className="card-body">
              <div className="seccion-aper">
                <div className="form-group">
                  <input
                    type="text"
                    name="anio"
                    className="form-control"
                    value={this.state.anio}
                    onChange={this.handleInputChange}
                    placeholder="Año"
                  />
                </div>
              </div>

              <div className="seccion-aper">
                <strong>
                  <label className="aper-label">Consejo de Facultad: </label>
                </strong>
                <div className="form-group">
                  <input
                    type="text"
                    name="nconsejo"
                    className="form-control"
                    value={this.state.nconsejo}
                    onChange={this.handleInputChange}
                    placeholder="N° Consejo"
                  />
                </div>

                <div className="apertura-label">
                  <div>
                    <input
                      type="date"
                      name="fechacon"
                      className="form-control"
                      value={this.state.fechacon}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="seccion-aper">
                <strong>
                  <label className="aper-label"> Resolución Decanal: </label>
                </strong>
                <div className="form-group">
                  <input
                    type="text"
                    name="resdecanal"
                    className="form-control"
                    value={this.state.resdecanal}
                    onChange={this.handleInputChange}
                    placeholder="N° R.D."
                  />
                </div>

                <div className="form-group">
                  <div>
                    <input
                      type="date"
                      name="fechard"
                      className="form-control"
                      value={this.state.fechard}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="seccion-aper">
                <strong>
                  <label className="aper-label"> Resolución Rectoral: </label>
                </strong>
                <div className="form-group">
                  <input
                    type="text"
                    name="resrectoral"
                    className="form-control"
                    value={this.state.resrectoral}
                    onChange={this.handleInputChange}
                    placeholder="N° R.R."
                  />
                </div>

                <div>
                  <input
                    type="date"
                    name="fecharr"
                    className="form-control"
                    value={this.state.fecharr}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <button
                onClick={this.RegistrarPresupuesto}
                className="btn btn-primary"
                href=""
              >
                APERTURAR PRESUPUESTO
              </button>
              <ol>
                {this.state.list.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ol>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoForm;
