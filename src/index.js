import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router-3";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import registroPresupuesto from "./components/RegistrarPresupuesto";
import Menu from "./components/Menu";
import moduloPresupuesto from "./components/ModuloPresupuesto";
import registrarEgresos from "./components/RegistrarEgresos";

class Index extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Menu} />
        <Route
          path="/vista/moduloPresupuesto"
          component={registroPresupuesto}
        />
        <Route path="/vista/Menu" component={Menu} />
        <Route path="/vista/moduloPresupuesto" component={moduloPresupuesto} />
        <Route path="/vista/registrarEgresos" component={registrarEgresos} />
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
registerServiceWorker();
