import React, { Component } from "react";
import { browserHistory } from "react-router-3";
import swal from "sweetalert";

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

  
 handleSubmit = async e =>{
    e.preventDefault();
    try{
        let config = {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.form)
        }
        let response = await
        fetch('https://registropresupuesto.herokuapp.com/presupuesto/save',config)
        let json = await response.json()
        console.log(json);
        swal("Envio exitoso!", "", "success");
        //ENVIAR A VISTA MODILO PRESUPUESTO
        browserHistory.push("/vista/moduloPresupuesto");
        //console.log('After: ',this.state.form);
        //console.log('paso guardado')
    }catch( error ){
        console.log('ERROR..');
        swal("Oops, Algo salió mal!!", "", "error");
    }

}
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

  handleFormChange(e){
    this.setState({
      form:{
        ...this.state.form,
      [ e.target.name]: e.target.value        
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

              <button
                //onClick={this.RegistrarPresupuesto}
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
