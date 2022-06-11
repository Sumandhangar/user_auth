import React, { useState } from "react";
import "./App.css";
import './css/navbar.css'
import './css/products.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Register from "./pages/Register";
import Navbar from "./pages/Navbar";

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <>
    <div className="">
    <BrowserRouter>
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
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
