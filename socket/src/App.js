import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChatroomPage from "./pages/ChatroomPage";
import DashboardPage from "./pages/DashboardPage";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return <BrowserRouter>
    <Switch>
      <Route path="/" component={IndexPage} exact></Route>
      <Route path="/login" component={LoginPage} exact></Route>
      <Route path="/register" component={RegisterPage} exact></Route>
      <Route path="/dashboard" component={DashboardPage} exact></Route>
      <Route path="/chatroom/:id" component={ChatroomPage} exact></Route>
    </Switch>
  </BrowserRouter>;
}

export default App;