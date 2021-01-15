import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/register" component={RegisterPage}></Route>
      <Route path="/dashboard" component={DashboardPage}></Route>
    </Switch>
  </BrowserRouter>;
}

export default App;