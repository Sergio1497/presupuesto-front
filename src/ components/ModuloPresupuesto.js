
import React, { Component, Fragment } from "react";
import { browserHistory } from "react-router-3";
import swal from "sweetalert";
import { TiArrowBack } from "react-icons/ti";

class TodoForm extends Component {

  constructor() {
    super();
    this.state = {
      list: [],
      text: "",
      form: {
        anio: "",
        nconsejo: "",
        fechacon: "",
        resdecanal: "",
        fechard: "",
        resrectoral: "",
        fecharr: ""
      }
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  changeDate = (fecha) =>{
    return fecha.substr(0,10);
  }

  handleSubmit = async a => {
    a.preventDefault();
    this.setState(
      {
        form: {
          ...this.state.form,
          fechacon: "2019-12-13T21:05:14.815+0000",
          fechard: "2019-12-13T21:05:14.815+0000",
          fecharr: "2019-12-13T21:05:14.815+0000"
        }
      },
      () => {
        let config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          crossdomain: true,
          body: JSON.stringify(this.state.form)
        };
        console.log(config.body);
        try {
          fetch(
            "https://registropresupuesto.herokuapp.com/presupuesto/save",
            config
          )
            .then(response => response.json())
            .then(g => {
              console.log(g);
              swal("Envio exitoso!", "", "success");
              //ENVIAR A VISTA MODILO PRESUPUESTO
              browserHistory.push("/vista/moduloPresupuesto");
            });
          //let json = await response.json();

          //console.log('After: ',this.state.form);
          //console.log('paso guardado')
        } catch (error) {
          console.log(error);
          swal("Oops, Algo salió mal!!", "", "error");
        }
      }
    );
  };
  /*handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState(prevState => ({
      list: prevState.list.concat(this.state.text),
      text: "",
      form: { 
        anio: "",
        nconsejo: "",
        fechacon: "",
        resdecanal: "",
        fechard: "",
        resrectoral: "",
        fecharr: ""
        }
    }));
  }*/

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

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

  handleFormChange(e) {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });

    console.log(this.state.form.anio);
  }

  RegistrarPresupuesto = e => {
    browserHistory.push("/vista/registrarPresupuesto");
    // console.log("Vista nueva");
    e.preventDefault();
  };

  ModuloPresupuesto = e => {
    // console.log("Vista nueva");
    e.preventDefault();
  };

  Menu = e => {
    browserHistory.push("/vista/Menu");
    // console.log("Vista nueva");
    e.preventDefault();
  };

  render() {
    const detalles = this.state.presupuestos || [] ;
    return (
      <div className="">
        <h2>Módulo de Presupuesto</h2>
        <button onClick={this.Menu} className="return float-right" href="" >
            Regresar <TiArrowBack />
        </button>
        <div className="" style={{paddingLeft: "10px"}}>
          <div className="row" style={{margin: "0px",width: "960!important"}}>
            <div className="col-md-6" style={{width: "400!important"}}>
              <div className="card">
                <div className="card-header">
                  <h4>Aperturar Nuevo presupuesto</h4>                  
                </div>
                <form onSubmit={this.handleSubmit} className="card-body">
                  <div className="seccion-aper">
                    <div className="form-group">
                      <input
                        minLength="4"
                        maxLength="4"
                        type="text"
                        name="anio"
                        className="form-control"
                        value={this.state.form.anio}
                        onChange={this.handleFormChange}
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
                        value={this.state.form.nconsejo}
                        onChange={this.handleFormChange}
                        placeholder="N° Consejo"
                      />
                    </div>

                    <div className="apertura-label">
                      <div>
                        <input
                          type="date"
                          name="fechacon"
                          className="form-control"
                          value={this.state.form.fechacon}
                          onChange={this.handleFormChange}
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
                        minLength="5"
                        maxLength="5"
                        type="text"
                        name="resdecanal"
                        className="form-control"
                        value={this.state.form.resdecanal}
                        onChange={this.handleFormChange}
                        placeholder="N° R.D."
                      />
                    </div>

                    <div className="form-group">
                      <div>
                        <input
                          type="date"
                          name="fechard"
                          className="form-control"
                          value={this.state.form.fechard}
                          onChange={this.handleFormChange}
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
                        minLength="5"
                        maxLength="5"
                        type="text"
                        name="resrectoral"
                        className="form-control"
                        value={this.state.form.resrectoral}
                        onChange={this.handleFormChange}
                        placeholder="N° R.R."
                      />
                    </div>

                    <div>
                      <input
                        type="date"
                        name="fecharr"
                        className="form-control"
                        value={this.state.form.fecharr}
                        onChange={this.handleFormChange}
                      />
                    </div>
                  </div>
                  <center>
                    <button
                      //onClick={this.RegistrarPresupuesto}
                      className="btn btn-primary btn-sm"
                      href=""
                    >
                      APERTURAR 
                    </button>
                  </center> 
                  <center>
                                      <button
                    onClick={this.RegistrarPresupuesto}
                    className="btn btn-primary btn-sm"
                    href=""
                  >
                    Siguiente
                  </button>
                  </center>
                  <ol>
                    {this.state.list.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ol>
                </form>
              </div>
            </div>
            <div className="pull-right" style={{width: "400!important"}} >
              <h4>PRESUPUESTOS</h4>
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
                      </tr>
                  </Fragment>)
                  })}
                </tbody>
              </table>
            </div>

          </div> {/*end.row*/}
        </div>
      </div>
    );
  }
}

export default TodoForm;
ModuloPresupuesto.js
Mostrando ModuloPresupuesto.js.
