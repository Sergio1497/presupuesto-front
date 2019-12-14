import React from "react";
import "../App.css";

class CustomRoow extends React.Component {
  constructor() {
    super();
    this.state = {
      // defaultValueOption: null,
      presupuesto: [],
      id_presupuesto_selec: "",
      
      anio: "",
      n_C: "",
      fecha_C: "",
      n_RD: "",
      fecha_RD: "",
      n_RR: "",
      fecha_RR: ""
    };
    this.handlePresupuestoChange = this.handlePresupuestoChange.bind(this);
    this.handleCantChange = this.handleCantChange.bind(this);
    this.handleSolesChange = this.handleSolesChange.bind(this);
  }

  handleProgramaChange(e) {
    this.setState({
      id_programa_selec: e.target.value
    });
  }

  handleCantChange(e) {
    this.setState({
      cant: e.target.value
    });
    console.log(e.target.value);
  }
  handleSolesChange(e) {
    this.setState({
      soles: e.target.value
    });
    let soles = e.target.value;
    let cant = this.state.cant;
    let total = soles * cant;
    console.log("TOTAL", total);
    this.setState({
      total: total
    });

    // this.total=this.soles*this.total,
    //  console.log(e.target.value);
  }

  componentDidUpdate(prevState) {
    // Uso tipico (no olvides de comparar los props):
    //if (this.state.id_programa_selec !== prevProps.tipo_grado) {
    fetch(
      "https://registropresupuesto.herokuapp.com/programas/" +
        this.state.id_programa_selec +
        "/cursos"
    )
      .then(response => response.json())
      .then(ga => {
        this.setState({ cursos: ga });
      });
    //}
  }

  componentDidMount() {
    fetch("https://registropresupuesto.herokuapp.com/programas")
      .then(response => response.json())
      .then(ga => {
        this.setState({ programas: ga });
      });
    fetch("https://registropresupuesto.herokuapp.com/clasificadorgasto")
      .then(response => response.json())
      .then(ga => {
        this.setState({ clas_gasto: ga });
      });
    fetch("https://registropresupuesto.herokuapp.com/semestres")
      .then(response => response.json())
      .then(ga => {
        this.setState({ semestres: ga });
      });
    fetch(
      "https://registropresupuesto.herokuapp.com/programas/" +
        this.state.id_programa_selec +
        "/cursos"
    )
      .then(response => response.json())
      .then(ga => {
        this.setState({ cursos: ga });
      });
    fetch("https://registropresupuesto.herokuapp.com/tipounidad")
      .then(response => response.json())
      .then(ga => {
        this.setState({ tipo_unidad: ga });
      });
    fetch("https://registropresupuesto.herokuapp.com/tipogrado")
      .then(response => response.json())
      .then(ga => {
        this.setState({ tipo_grado: ga });
      });
    fetch("https://registropresupuesto.herokuapp.com/presupuesto_detalle")
      .then(response => response.json())
      .then(ga => {
        this.setState({ presupuesto_detalle: ga });
      });
  }

  render() {
    return (
      <tbody>
        <tr>
          <td>
            <strong>
              <input className="input-anio" disabled value={this.state.total} />
            </strong>
          </td>
          <td className="td">
            <strong>
              <input className="input-n_C" disabled value={this.state.total} />
            </strong>
          </td>
          <td className="td">
            <strong>
              <input className="input-fecha_C" disabled value={this.state.total} />
            </strong>
          </td>
          <td className="td">
            <strong>
              <input className="input-n_RD" disabled value={this.state.total} />
            </strong>
          </td>
          <td className="td">
            <strong>
              <input className="input-fecha_RD" disabled value={this.state.total} />
            </strong>
          </td>
          <td className="td">
            <strong>
              <input className="input-n_RR" disabled value={this.state.total} />
            </strong>
          </td>
          <td>
            <strong>
              <input className="input-fecha_RR" disabled value={this.state.total} />
            </strong>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default CustomRoow;
