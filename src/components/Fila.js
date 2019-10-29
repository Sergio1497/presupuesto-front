import React from "react";
import "../App.css";

class CustomRow extends React.Component {
  
  constructor(){
   super();
   this.state = {
   // defaultValueOption: null,
    presupuesto_detalle: [],
    programas: [],
    clas_gasto: [],
    semestres: [],
    cursos: [],
    tipo_unidad: [],
  };
  }



  componentDidMount() {
    fetch("https://registropresupuesto.herokuapp.com/programas")
    .then(response => response.json())
    .then(ga =>{
      this.setState({ programas: ga })
    });   
    fetch("https://registropresupuesto.herokuapp.com/clas_gasto")
    .then(response => response.json())
    .then(ga =>{
      this.setState({ clas_gasto: ga })
    });
    fetch("https://registropresupuesto.herokuapp.com/semestres")
    .then(response => response.json())
    .then(ga =>{
      this.setState({ semestres: ga })
    });
    fetch("https://registropresupuesto.herokuapp.com/cursos")
    .then(response => response.json())
    .then(ga =>{
      this.setState({ cursos: ga })
    });
    fetch("https://registropresupuesto.herokuapp.com/tipo_unidad")
    .then(response => response.json())
    .then(ga =>{
      this.setState({ tipo_unidad: ga })
    });
    fetch("https://registropresupuesto.herokuapp.com/presupuesto_detalle")
    .then(response => response.json())
    .then(ga =>{
      this.setState({ presupuesto_detalle: ga })
    });
  }



  render() {
    return (
      <tbody>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td className="td">
            <select className="clas_gast" name="clas_gast">
            {this.state.clas_gasto.map(clas_gasto => (
                <option key={clas_gasto.id_clas_gasto} value={clas_gasto.id_clas_gasto}>
                  {clas_gasto.clas_gasto_nombre}
                </option>
              ))}
            </select>
          </td>
          <td className="td">
            <select className="prog" name="prog">
            {this.state.programas.map(programa => (
                <option key={programa.id} value={programa.id}>
                  {programa.nombrePrograma}
                </option>
              ))}
            </select>
          </td>
          <td className="td">
            <select className="sem" name="sem">
            {this.state.semestres.map(semestres => (
                <option key={semestres.id} value={semestres.id}>
                  {semestres.descripcion}
                </option>
              ))}
            </select>
          </td>
          <td className="td">
            <select className="curso" name="curso">
            {this.state.cursos.map(cursos => (
                <option key={cursos.id} value={cursos.id}>
                  {cursos.nombreCurso}
                </option>
              ))}
            </select>
          </td>
          <td className="td">
            <select className="uni" name="uni">
            {this.state.tipo_unidad.map(tipo_unidad => (
                <option key={tipo_unidad.id} value={tipo_unidad.id}>
                  {tipo_unidad.nombreUnidad}
                </option>
              ))}
            </select>
          </td>
          <td>
            <input className="input-cant" />
          </td>
          <td className="td">
            <select className="grad" name="grad">
            {this.state.presupuesto_detalle.map(presupuesto_detalle => (
                <option key={presupuesto_detalle.id} value={presupuesto_detalle.id}>
                  {presupuesto_detalle.gradodocente}
                </option>
              ))}
            </select>
          </td>
          <td>
            <input className="input-num" />
          </td>
          <td>
            <input className="input-s" />
          </td>
          <td>
            <strong>
              <input className="input-t" disabled />
            </strong>
          </td>
        </tr>
      </tbody>
    );
  }
}
export default CustomRow;
