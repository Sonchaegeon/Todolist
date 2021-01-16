import React from "react";
import io from "socket.io-client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChatroomPage from "./pages/ChatroomPage";
import DashboardPage from "./pages/DashboardPage";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import makeToast from "./Toaster";

function App() {
  const [socket, setSocket] = React.useState(null);

  const setupSocket = () => {
    const token = localStorage.getItem("Token");
    if(token.length > 0 && !socket) {
      const newSocket = io("http://localhost:3000", {
        query: {
            token: localStorage.getItem('Token')
        }
      });

      newSocket.on("disconnect", () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
        makeToast('error', "Socket Disconnected!");
      });

      newSocket.on("connect", () => {
        makeToast('success', "Socket Connected!");
      });

      setSocket(newSocket);
    }
  }

  React.useEffect(() => {
    setupSocket();
    //eslint-disable-next-line
  }, []);

  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={IndexPage} exact></Route>
      <Route path="/login" render={()=><LoginPage setupSocket={setupSocket}/>} exact></Route>
      <Route path="/register" component={RegisterPage} exact></Route>
      <Route path="/dashboard" rander={()=><DashboardPage socket={socket}/>} exact></Route>
      <Route path="/chatroom/:id" rander={()=><ChatroomPage socket={socket}/>} exact></Route>
    </Switch>
  </BrowserRouter>);
}

export default App;