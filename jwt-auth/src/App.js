import React, { useState } from "react";
import "./App.css";
import './css/navbar.css'
import './css/products.css'
import './css/footer.css'
import './css/slider.css'
import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./pages/Header";
import Register from "./pages/Register";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Footer from './pages/Footer'
import Music from "./pages/Music";

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <>
    <div className="">
      {/* <Layout/> */}
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Layout logoutUser={logoutUser} />
            {/* <Home logoutUser={logoutUser} /> */}
            <Footer/>
          </Route>
          <Route path="/login">
            <Login setLogoutUser={setLogoutUser} />
          </Route>
          <Route path="/register">
            <Register setLogoutUser={setLogoutUser} />
          </Route>
          <Route path="/music" element={<Music />} />
        </Switch>
       
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
