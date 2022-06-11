import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
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
                            <Link to="/register" className="nav-link pl-lg-4 pr-lg-4">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="domain.html" className="nav-link pl-lg-4 pr-lg-4">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link pl-lg-4 pr-lg-4">Login</Link>
                        </li>
                    </ul>
                    {/* <div className="form ml-auto">
                        <ul className="navbar-nav">
                        <li className="nav-item contact-link shadow rounded">
                                <Link to="#" className="nav-link text-white pl-3 pr-3 mr-2">Login</Link>
                            </li>
                            <li className="nav-item contact-link shadow rounded">
                                <Link to="#" className="nav-link text-white pl-3 pr-3 ml-2">Register</Link>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar