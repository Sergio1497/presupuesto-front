import React, { Component } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoMdSave } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { IoMdCopy } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import swal from "sweetalert";

import { browserHistory } from "react-router-3";

import CustomRow from "./Fila";

import TableHeader from "./TableHeader";

class TodoForm extends Component {
  RegistrarPresupuesto = e => {
    browserHistory.push("/vista/registrarPresupuesto");
    // console.log("Vista nueva");
    this.onSubmit2 = this.onSubmit2.bind(this);
    e.preventDefault();
  };

  RegistrarEgresos = e => {
    browserHistory.push("/vista/registrarEgresos");
    // console.log("Vista nueva");
    e.preventDefault();
  };

  constructor(props) {
    super(props);
    this.state = { rows: [] };
  }

  appendRow(event) {
    var joined = this.state.rows.concat(<CustomRow />);
    this.setState({ rows: joined });
  }

  onSubmit2 = e => {
    swal("Egresos registrados exitosamente!", "", "success");
    e.preventDefault();
  };

  render() {
    return (
      <div className="text-center">
        <h3>
          Registrar Egresos
          <button
            onClick={this.RegistrarPresupuesto}
            className="return"
            href=""
          >
            Regresar <TiArrowBack />
          </button>
        </h3>
        <hr />
        <div className="first-buttons">
          <div class="btn-group" role="group">
            <button className="btn-selec btn-primary ">
              <IoMdCheckmark className="icon" /> SELECCIONAR TODO
            </button>
            <button className="btn-del btn-primary ">
              <IoMdClose className="icon" /> ELIMINAR FILAS SELECCIONADAS
            </button>
            <button className="btn-sav btn-primary ">
              <IoMdSave className="icon" /> GUARDAR FILAS SELECCIONADAS
            </button>
          </div>
        </div>
        <hr />
        <table className="table-small">
          <TableHeader />
          <CustomRow />
          {this.state.rows}
        </table>

        <hr />

        <div className="first-buttons">
          <div class="btn-group" role="group">
            <button
              className="btn-add btn-primary "
              rel="1"
              onClick={this.appendRow.bind(this)}
            >
              <IoMdAdd className="icon" /> AGREGAR NUEVA FILA
            </button>
            <button className="btn-cop btn-primary ">
              <IoMdCopy className="icon" /> COPIAR FILAS SELECCIONADAS
            </button>
          </div>
        </div>
        <hr />
        <button className="btn-egr btn-primary" onClick={this.onSubmit2}>
          <IoMdSave className="icon" /> <strong>GUARDAR TODO</strong>
        </button>
      </div>
    );
  }
}

export default TodoForm;
