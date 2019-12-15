import React, { Component,Fragment } from "react";
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

  constructor(props) {
    super(props);
    this.state = { rows: [],
     presupuesto: [], };

  }

  RegistrarPresupuesto = e => {
    browserHistory.push("/vista/registrarPresupuesto");
    // console.log("Vista nueva");
    this.onSubmit2 = this.onSubmit2.bind(this);
    e.preventDefault();
  };

    changeDate = (fecha) =>{
    return fecha.substr(0,10);
  }
  
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
  componentDidMount(){

      fetch('https://registropresupuesto.herokuapp.com/presupuesto')
        .then((response) => {
          return response.json()
        })
        .then((presupuestos) => {
          this.setState({ presupuestos: presupuestos })
          console.log(presupuestos);
        })
        .catch( error =>{ console.log(error) 
        });
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
  const detalles = this.state.presupuestos || [] ;
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

        <div className="first-buttons">
          <div className="btn-group" role="group">
          </div>
        </div>
        <div className="row">
          <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Año</th>
                    <th># Consejo</th>
                    <th>Fecha Consejo</th>
                    <th># R.D.</th>
                    <th>Fecha Resolución</th>
                    <th>RR</th>
                    <th>Fecha RR</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>                
                 {detalles.map((detalle, i) => {
                  return (<Fragment key={`fragment_${detalle.id}`}>
                      <tr key={i}>
                        <td><center>{detalle.anio}</center></td>
                        <td><center>{detalle.numconfac}</center></td>
                        <td><center>{this.changeDate(detalle.fechaCon)}</center></td>
                        <td><center>{detalle.numrd}</center></td>
                        <td><center>{this.changeDate(detalle.rdfecha)}</center></td>
                        <td><center>{detalle.numrr}</center></td>
                        <td><center>{this.changeDate(detalle.rrfecha)}</center></td>   
                        <td width="10%"><button className="btn btn-warning">Edit</button></td>                    
                      </tr>
                  </Fragment>)
                  })}
                </tbody>
              </table>
        </div>
            
        <hr />
      </div>
    );
  }
}

export default TodoForm;
