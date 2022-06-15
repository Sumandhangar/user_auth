
import React,{useState} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Register from "./Register";
import Computers from "./Computers";
import {Categories}  from './Categories';
import Products from './Products';
import Slider from './Slider';
import Footer from './Footer';

const Layout = () => {
    const [logoutUser, setLogoutUser] = useState(false);
  return (
    <>

      
    {/* <Categories/>
    <Products/>
    <Slider/> */}
    <Footer/>
    </>
  )
}

export default Layout