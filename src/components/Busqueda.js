import React, { Component } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoMdSave } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { IoMdCopy } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import swal from "sweetalert";

import { browserHistory } from "react-router-3";

import CustomRoow from "./Filaa";

import TableHeadeer from "./TableHeadeer";

class TodoForm extends Component {
  RegistrarPresupuesto = e => {
    browserHistory.push("/vista/registrarPresupuesto");
    // console.log("Vista nueva");
    this.onSubmit2 = this.onSubmit2.bind(this);
    e.preventDefault();
  };
  
  Menu = e => {
    browserHistory.push("/vista/menu");
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
    var joined = this.state.rows.concat(<CustomRoow />);
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
          NO SE QUE TITULO PONER
          <button
            onClick={this.Menu}
            className="return"
            href=""
          >
            Regresar <TiArrowBack />
          </button>
        </h3>
        <hr />
        <hr />
        <table className="table-small">
          <TableHeadeer />
          <CustomRoow />
          {this.state.rows}
        </table>

        <hr />

        <div className="first-buttons">
          <div className="btn-group" role="group">
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default TodoForm;
