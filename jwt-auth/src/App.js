import React, { useState } from "react";
import "./App.css";
// import './css/navbar.css'
// import './css/products.css'
// import './css/footer.css'
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
// import 'react-slider-swiper/src/css/swiper.css'
// import 'swiper/css';
import './css/style.css'
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';


import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./pages/Header";
import Register from "./pages/Register";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Footer from './pages/Footer'
import Music from "./pages/Music";
import Computers from './pages/Computers'

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <>
    <div className="body">
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
