import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { logoutInitiate } from "../redux/actions";
import logo from '../images/logo.png'
import { GrLocation } from 'react-icons/gr'
import Flag from '../images/india.jpg'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FiShoppingCart } from 'react-icons/fi'
import { BiSearch } from 'react-icons/bi'

const Header = ({ logoutUser, setLogoutUser }) => {
  const { user } = useSelector((state) => state.auth);

  let dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutInitiate());
  };

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light text-white" id="navbar" style={{ background: '#131921' }}>
        <Link className="navbar-brand" style={{ width: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={logo} className='w-100' />
        </Link>
        <Link to='/' className="text-white m-2"><div className="w-100 d-flex border rounded p-1" style={{ justifyCOntent: 'center', alignItems: 'center' }}> <HiOutlineLocationMarker color="white" size="1.5em" /><span className="pl-lg-1 m-0" style={{ lineHeight: '19px' }}><small>Deviver to</small> <b>India</b></span></div> </Link>

        <div className="search-button rounded bg-light d-flex" style={{ height: '42px' }}><div class="dropdown" style={{ borderRadius: '20px 0 0 20px', height: '100%', fontSize: '14px', color: 'gray' }}>
          <button type="button" class="btn dropdown-toggle border-top-0 border-bottom-0 border-left-0 border-right-1" data-toggle="dropdown" style={{ borderRadius: '0', border: '1px solid gray', height: '100%', fontSize: '12px' }}>
            All
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Link 1</a>
            <a className="dropdown-item" href="#">Link 2</a>
            <a className="dropdown-item" href="#">Link 3</a>
          </div>
        </div>
          <input type="text" className="bg-white border-0" />
          <button type="submit" className="h-100  border-0 pl-2 pr-2" style={{ borderRadius: '0 4px 4px 0', width: '50px', background: 'rgb(237 182 55)' }}><BiSearch size="1.5em" /></button>
        </div>

        <Link to='/' className="text-white m-2"><div className="w-100 d-flex border rounded p-1" style={{ justifyCOntent: 'center', alignItems: 'center' }}>
          <div className="dropdown">
            <button className="dropbtn dropdown-toggle" style={{ width: '55px', height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src={Flag} className='w-100' /></button>
            <div className="dropdown-content rounded pl-2 pr-2 pt-2" style={{ width: '250px' }}>
              <div className="input-group d-flex">
                <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                <label for="html" className="text-dark pl-2">English - EN</label>
              </div>
              <div className="input-group d-flex">
                <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                <label for="html" className="text-dark pl-2">Hindi - HI</label>
              </div>
              <div className="input-group d-flex">
                <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                <label for="html" className="text-dark pl-2">தமிழ் - TA</label>
              </div>
              <div className="input-group d-flex">
                <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                <label for="html" className="text-dark pl-2">English</label>
              </div>
              <div className="input-group d-flex">
                <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                <label for="html" className="text-dark pl-2">తెలుగు - TE - అనువాదం</label>
              </div>
              <div className="input-group d-flex">
                <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                <label for="html" className="text-dark pl-2">ಕನ್ನಡ - KN - ಭಾಷಾಂತರ</label>
              </div>
              <div className="input-group d-flex">
                <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                <label for="html" className="text-dark pl-2">മലയാളം - ML - വിവർത്തനം</label>
              </div>
              <div className="input-group d-flex">
                <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                <label for="html" className="text-dark pl-2">বাংলা - BN - অনুবাদ</label>
              </div>
              <div className="input-group d-flex">
                <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                <label for="html" className="text-dark pl-2">मराठी - MR - भाषांतर</label>
              </div>
              <div className="d-flex mb-2"><div className="" style={{ width: '20px' }}><img src={Flag} className='w-100' /></div><span className="text-dark pl-2 pt-1" style={{ fontSize: '14px' }}>You are shopping on Nobaggy.in</span></div>
              <Link><span className="text-primary">Change country/region</span></Link>
            </div>
          </div></div> </Link>





        {/* ******************************* */}
        <Link to='/' className="text-white m-2"><div className="w-100 d-flex border rounded p-1" style={{ justifyCOntent: 'center', alignItems: 'center' }}>
          <div className=" dropdown">
            <button className="dropbtn dropdown-toggle" style={{ height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <small>Hello, Sign in<br /> <b>Account & Lists</b></small>
            </button>
            <div className="dropdown-content rounded pl-2 pr-2" style={{ width: '450px' }}>
              <div className="input-group d-flex justify-content-center align-items-center mt-3" style={{ flexDirection: 'column' }}>
                <button className="btn pl-5 pr-5 btn-warning border-0" style={{ background: 'rgb(237, 182, 55)' }}><small>Sign in</small></button>
                <small className="text-dark d-flex justify-content-center align-items-center">New customer?<Link to='/' className="text-primary p-1"> start here</Link></small>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <h6 className="text-dark pl-1">Your Lists</h6>
                  <ul className="" style={{ lineHeight: '0', listStyleType: 'none' }}>
                    <li style={{ marginLeft: '-3rem' }}><Link to=''><small>Create a wish List</small></Link></li>
                    <li style={{ marginLeft: '-3rem' }}><Link to=''><small>Wish from  any Website</small></Link></li>
                    <li style={{ marginLeft: '-3rem' }}><Link to=''><small>Baby Wish List</small></Link></li>
                    <li style={{ marginLeft: '-3rem' }}><Link to=''><small>Discover Your style</small></Link></li>
                    <li style={{ marginLeft: '-3rem' }}><Link to=''><small>Explore Showroom</small></Link></li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 className="text-dark">Your Account</h6>
                  <ul className="" style={{ lineHeight: '0', listStyleType: 'none' }}>
                    <li style={{ marginLeft: '-5rem' }}><Link to=''><small>Your Account</small></Link></li>
                    <li style={{ marginLeft: '-5rem' }}><Link to=''><small>Your Orders</small></Link></li>
                    <li style={{ marginLeft: '-5rem' }}><Link to=''><small>Your Wish List</small></Link></li>
                    <li style={{ marginLeft: '-5rem' }}><Link to=''><small>Your Recommendations</small></Link></li>
                    <li style={{ marginLeft: '-5rem' }}><Link to=''><small>Your Prime Membership</small></Link></li>
                    <li style={{ marginLeft: '-5rem' }}><Link to=''><small>Your Prime Video</small></Link></li>
                    <li style={{ marginLeft: '-5rem' }}><Link to=''><small>Your Subscribe & Save Items</small></Link></li>
                    <li style={{ marginLeft: '-5rem' }}><Link to=''><small>Memberships & Subscriptions</small></Link></li>
                    <li style={{ marginLeft: '-5rem' }}><Link to=''><small>Your Amazon Business Account</small></Link></li>
                    <li style={{ marginLeft: '-5rem' }}><Link to=''><small>Your Seller Account</small></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> </Link>

        <Link to='/' className="text-white m-2"><div className="w-100 d-flex border rounded p-1" style={{ justifyCOntent: 'center', alignItems: 'center' }}>
          <button className="border-0 text-white" style={{ height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: "transparent" }}>
            <small>Returns & Orders</small>
          </button>
        </div> </Link>

        <Link to='/' className="text-white m-2"><div className="w-100 d-flex border rounded p-1" style={{ justifyCOntent: 'center', alignItems: 'center' }}>
          <button className="border-0 text-white" style={{ height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: "transparent" }}>
            <small className="d-flex"><FiShoppingCart size="2em" /><b>Cart</b></small>
          </button>
        </div> </Link>


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: 'none' }}>
          <span className="navbar-toggler-icon" style={{ backgroundImage: 'none' }}></span>
        </button>
        <div className="collapse navbar-collapse mt-lg-0 mt-md-3 mt-3" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/register" className="nav-link pl-lg-4 pr-lg-4 text-white">Register</Link>
            </li>
            {user ? (
              <li className="nav-item">
                <Link to="/" className="nav-link pl-lg-4 pr-lg-4"> <Button className="btn" style={{ width: "100px" }} variant="contained" color="secondary" onClick={logout}>Logout</Button></Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login"><Button style={{ width: "100px" }} variant="contained" color="secondary" className="font-weight-bold">Login</Button></Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-expand-xl" style={{ background: '#232f3e' }}>
         <ul className="navbar-nav">
         <li className="nav-link"><Link to='/' className="nav-item">Today's Deals</Link></li>
          <li className="nav-link"><Link to='/' className="nav-item">Customer Service</Link></li>
          <li className="nav-link"><Link to='/' className="nav-item">Registry</Link></li>
          <li className="nav-link"><Link to='/' className="nav-item">Gift Cards</Link></li>
          <li className="nav-link"><Link to='/' className="nav-item">Sell</Link></li>
         </ul>
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
