import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headers from "./components/Headers";
import Login from "./pages/Authetication/Login";
import Register from "./pages/Authetication/Register";
import AnimeRegister from "./pages/Animes/Register";
import List from "./pages/List";

const routes = () => (
  <Router>
    <Headers />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/list" component={List} />
      <Route exact path="/anime/register" component={AnimeRegister} />
      <Route path="*" component={() => <h1>PAGINA NAO EXISTE</h1>} />
    </Switch>
  </Router>
);

export default routes;
