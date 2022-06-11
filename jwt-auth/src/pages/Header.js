import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { logoutInitiate } from "../redux/actions";
import Navbar from "./Navbar";

const Header = ({ logoutUser, setLogoutUser }) => {
  const { user } = useSelector((state) => state.auth);

  let dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutInitiate());
  };

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
        <Link className="navbar-brand ml-lg-3" style={{ height: '80px', width: '80px', bordeRadius: '100%' }}>
          <h3>Logo here</h3>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: 'none' }}>
          <span className="navbar-toggler-icon" style={{ backgroundImage: 'none' }}></span>
        </button>
        <div className="collapse navbar-collapse mt-lg-0 mt-md-3 mt-3" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="index.html" className="nav-link pl-lg-4 pr-lg-4">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="about.html" className="nav-link pl-lg-4 pr-lg-4">About
                Us</Link>
            </li>
            <li className="nav-item">
              <Link to="services.html" className="nav-link pl-lg-4 pr-lg-4">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="domain.html" className="nav-link pl-lg-4 pr-lg-4">Domians</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link pl-lg-4 pr-lg-4">Register</Link>
            </li>
            {user ? (
              <li className="nav-item">
                <Link to="domain.html" className="nav-link pl-lg-4 pr-lg-4"> <Button className="btn" style={{ width: "100px" }} variant="contained" color="secondary" onClick={logout}>Logout</Button></Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login"><Button style={{ width: "100px" }} variant="contained" color="secondary" className="font-weight-bold">Login</Button></Link>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* {user ? (
          <Button className="btn" style={{ width: "100px" }} variant="contained" color="secondary" onClick={logout}>Logout</Button>
        ) : (
          <Link to="/login"><Button style={{ width: "100px" }} variant="contained" color="secondary" className="font-weight-bold">Login</Button></Link>
        )} */}
    </>
  );
};

export default Header;
