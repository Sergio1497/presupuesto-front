import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router-3";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import registroPresupuesto from "./components/RegistrarPresupuesto";
import Menu from "./components/Menu";
import moduloPresupuesto from "./components/ModuloPresupuesto";
import registrarEgresos from "./components/RegistrarEgresos";
import busqueda from "./components/Busqueda";

class Index extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Menu} />
        <Route path="/vista/moduloPresupuesto" component={moduloPresupuesto} />
        <Route path="/vista/Menu" component={Menu} />
        <Route
          path="/vista/registrarPresupuesto"
          component={registroPresupuesto}
        />
        <Route path="/vista/registrarEgresos" component={registrarEgresos} />
        <Route path="/vista/busqueda" component={busqueda} />
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
registerServiceWorker();
