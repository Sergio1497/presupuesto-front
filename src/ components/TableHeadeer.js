import React from "react";
import "../App.css";
class TableHeadeer extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th className="th">AÑO</th>
          <th className="th ancho">N° Consejo</th>
          <th className="th ancho">Fecha C.</th>
          <th className="th peq">N° R.D.</th>
          <th className="th ancho">Fecha R.D.</th>
          <th className="th peq">N° R.R.</th>
          <th className="th">Fecha R.R.</th>
          <th className="th peq">G</th>
        </tr>
      </thead>
    );
  }
}

export default TableHeadeer;
