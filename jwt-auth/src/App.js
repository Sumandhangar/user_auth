import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Register from "./pages/Register";

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <h2>JWT Authentication using JSON fake server</h2>
        <Switch>
          <Route exact path="/">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Home logoutUser={logoutUser} />
          </Route>
          <Route path="/login">
            <Login setLogoutUser={setLogoutUser} />
          </Route>
          <Route path="/register">
            <Register setLogoutUser={setLogoutUser} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
