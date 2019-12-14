import React, { Component } from "react";
import { browserHistory } from "react-router-3";

class TodoForm extends Component {
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

  RegistrarEgresos = e => {
    browserHistory.push("/vista/registrarEgresos");
    // console.log("Vista nueva");
    e.preventDefault();
  };

 

  render() {
    return (
      <div className="text-center">
        <h3>
          MODULO PRESUPUESTO
        </h3>
        <hr />

        <div className="container">
          <div className="card-reg">
            <button
              type="button"
              className="btn-reg btn-primary"
              onClick={this.ModuloPresupuesto}
            >
              REGISTRAR PRESUPUESTO{" "}
            </button>

            <button type="button" className="btn-reg btn-primary">
              BUSCAR PRESUPUESTO{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoForm;
