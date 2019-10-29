import React from "react";
import "../App.css";
class TableHeader extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th className="th">SELECT</th>
          <th className="th ancho">CLASIFICADOR DE GASTO</th>
          <th className="th ancho">PROGRAMA</th>
          <th className="th peq">SEMESTRE</th>
          <th className="th ancho">CURSO</th>
          <th className="th peq">UNIT.</th>
          <th className="th">CANT.</th>
          <th className="th peq">G</th>
          <th className="th ">N°</th>
          <th className="th medio">S/</th>
          <th className="th medio">TOTAL S/</th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
