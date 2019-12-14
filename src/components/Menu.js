import React, { Component } from "react";
import { browserHistory } from "react-router-3";
import { TiArrowBack } from "react-icons/ti";

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
          <button onClick={this.ModuloPresupuesto} className="return" href="">
            Regresar <TiArrowBack />
          </button>
        </h3>
        <hr />

        <div className="container">
          <div className="card-reg">
            <button
              type="button"
              className="btn-reg btn-primary"
              onClick={this.RegistrarPresupuesto}
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
