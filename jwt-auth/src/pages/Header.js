import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { logoutInitiate } from "../redux/actions";
import logo from '../images/logo.png'
import { FaUserCircle } from 'react-icons/fa'
import Flag from '../images/india.jpg'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FiShoppingCart } from 'react-icons/fi'
import { BiSearch } from 'react-icons/bi'
import { BsGlobe, BsArrowLeftShort } from 'react-icons/bs'
import { GiUsaFlag } from 'react-icons/gi'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'

const Header = ({ logoutUser, setLogoutUser }) => {
  const { user } = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutInitiate());
  };
  const [showless, setShowAll] = useState(false);

  const [state, setState] = useState("");
  const toggleAccordion = () => {
    setState(state === "" ? "open" : "");
  }

  const [style, setStyle] = useState(false);
  const toggleClass = () => {
    setStyle(!style);
  };
  const [style2, setStyle2] = useState(false);
  const toggleClass2 = () => {
    setStyle2(!style2);
  };
  const [style3, setStyle3] = useState(false);
  const toggleClass3 = () => {
    setStyle3(!style3);
  };
  return (
    <>

      <div className=" container-fluid text-white" id="navbar" style={{ background: '#131921' }}>
        <div className="row">
          <div className="col-12 d-flex align-items-center">
            <Link to='/' className="navbar-brand" style={{ width: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h5 className="text-light p-0 m-0">Nobaggy</h5>
            </Link>
            <Link to='/' className="text-white m-2">
              <div className="w-100 d-flex rounded p-1 hover-border" style={{ justifyCOntent: 'center', alignItems: 'center' }}> <HiOutlineLocationMarker color="white" size="1.5em" /><span className="pl-lg-1 m-0" style={{ lineHeight: '19px' }}>Deviver to <b>India</b></span></div>
            </Link>
            
            <div className="search-button rounded bg-light d-flex justify-content-left" style={{ height: '42px' }}><div className="dropdown" style={{ borderRadius: '20px 0 0 20px', height: '100%', fontSize: '14px', color: 'gray' }}>
              <select className="btn dropdown-toggle border-top-0 text-left border-bottom-0 border-left-0 border-right-1" id='select-category' data-toggle="dropdown" style={{ borderRadius: '0', border: '1px solid gray', height: '100%', fontSize: '12px', width: 'fit-content' }}>
                <option>All</option>
                <option>Art & Craft</option>
                <option>Computers</option>
                <option>Clothes</option>
                <option>Music</option>
                <option>Skin Care</option>
                <option>Baby Shop</option>
                <option>Electronic</option>
                <option>Girls fashion</option>
                <option>Boys Fashion</option>
                <option>Father's Day special</option>
                <option>Kitchen</option>
                <option>Watches</option>
                <option>Men's Clothes</option>
                <option>Shoes</option>
                <option>Books</option>
              </select>
            </div>
              <input type="text" className="bg-white border-0" style={{ width: '420px' }} />
              <button type="submit" className="h-100  border-0 pl-2 pr-2" style={{ borderRadius: '0 4px 4px 0', width: '50px', background: 'rgb(237 182 55)' }}><BiSearch size="1.5em" /></button>
            </div>

            <Link to='/' className="text-white m-2">
              <div className="w-100 d-flex rounded p-1 hover-border" style={{ justifyCOntent: 'center', alignItems: 'center' }}>
                <div className="dropdown">
                  <button className="dropbtn dropdown-toggle" style={{ width: '55px', height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Flag} className='w-100' alt='flag' /></button>
                  <div className="dropdown-content rounded pl-2 pr-2 pt-2" style={{ width: '250px' }}>
                    <div className="input-group d-flex">
                      <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                      <label htmlFor="htmlFor" className="text-dark pl-2">English - EN</label>
                    </div>
                    <div className="input-group d-flex">
                      <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                      <label htmlFor="htmlFor" className="text-dark pl-2">Hindi - HI</label>
                    </div>
                    <div className="input-group d-flex">
                      <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                      <label htmlFor="htmlFor" className="text-dark pl-2">தமிழ் - TA</label>
                    </div>
                    <div className="input-group d-flex">
                      <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                      <label htmlFor="htmlFor" className="text-dark pl-2">English</label>
                    </div>
                    <div className="input-group d-flex">
                      <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                      <label htmlFor="htmlFor" className="text-dark pl-2">తెలుగు - TE - అనువాదం</label>
                    </div>
                    <div className="input-group d-flex">
                      <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                      <label htmlFor="htmlFor" className="text-dark pl-2">ಕನ್ನಡ - KN - ಭಾಷಾಂತರ</label>
                    </div>
                    <div className="input-group d-flex">
                      <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                      <label htmlFor="htmlFor" className="text-dark pl-2">മലയാളം - ML - വിവർത്തനം</label>
                    </div>
                    <div className="input-group d-flex">
                      <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                      <label htmlFor="htmlFor" className="text-dark pl-2">বাংলা - BN - অনুবাদ</label>
                    </div>
                    <div className="input-group d-flex">
                      <input type="radio" id="html" name="fav_language" value="English" className="mt-1" />
                      <label htmlFor="htmlFor" className="text-dark pl-2">मराठी - MR - भाषांतर</label>
                    </div>
                    <div className="d-flex mb-2">
                      <div className="" style={{ width: '20px' }}>
                        <img src={Flag} className='w-100' alt='flag' /></div>
                      <span className="text-dark pl-2 pt-1" style={{ fontSize: '14px' }}>You are shopping on Nobaggy.in</span></div>
                    <Link to='/'><span className="text-primary">Change country/region</span></Link>
                  </div>
                </div>
              </div>
            </Link>
            <Link to='/' className="text-white m-2">
              <div className="w-100 d-flex rounded p-1 hover-border" style={{ justifyCOntent: 'center', alignItems: 'center' }}>
                <div className=" dropdown">
                  <button className="dropbtn dropdown-toggle" style={{ height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <small>Hello, Sign in<br /> <b>Account & Lists</b></small>
                  </button>
                  <div className="dropdown-content rounded pl-2 pr-2 mt-1" style={{ width: '450px', marginLeft: '-7rem' }}>
                    <div className="input-group d-flex justify-content-center align-items-center mt-3" style={{ flexDirection: 'column' }}>
                      {user ? (
                        <Link to="/" className="pl-lg-4 pr-lg-4"> <Button className="btn" style={{ width: "100px" }} variant="contained" color="secondary" onClick={logout}>Logout</Button></Link>
                      ) : (
                        <Link to="/login"><Button style={{ width: "100px" }} variant="contained" color="secondary" className="font-weight-bold">Login</Button></Link>
                      )}
                      <small className="text-dark d-flex justify-content-center align-items-center">New customer?<Link to='/register' className="text-primary p-1"> start here</Link></small>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-6">
                        <h6 className="text-dark pl-1">Your Lists</h6>
                        <ul className="" style={{ lineHeight: '0', listStyleType: 'none' }}>
                          <li style={{ marginLeft: '-3rem' }}><Link to='/register'><small>Create a wish List</small></Link></li>
                          <li style={{ marginLeft: '-3rem' }}><Link to='/'><small>Wish from  any Website</small></Link></li>
                          <li style={{ marginLeft: '-3rem' }}><Link to='/'><small>Baby Wish List</small></Link></li>
                          <li style={{ marginLeft: '-3rem' }}><Link to='/'><small>Discover Your style</small></Link></li>
                          <li style={{ marginLeft: '-3rem' }}><Link to='/'><small>Explore Showroom</small></Link></li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h6 className="text-dark">Your Account</h6>
                        <ul className="" style={{ lineHeight: '0', listStyleType: 'none' }}>
                          <li style={{ marginLeft: '-5rem' }}><Link to='/'><small>Your Account</small></Link></li>
                          <li style={{ marginLeft: '-5rem' }}><Link to='/'><small>Your Orders</small></Link></li>
                          <li style={{ marginLeft: '-5rem' }}><Link to='/'><small>Your Wish List</small></Link></li>
                          <li style={{ marginLeft: '-5rem' }}><Link to='/'><small>Your Recommendations</small></Link></li>
                          <li style={{ marginLeft: '-5rem' }}><Link to='/'><small>Your Prime Membership</small></Link></li>
                          <li style={{ marginLeft: '-5rem' }}><Link to='/'><small>Your Prime Video</small></Link></li>
                          <li style={{ marginLeft: '-5rem' }}><Link to='/'><small>Your Subscribe & Save Items</small></Link></li>
                          <li style={{ marginLeft: '-5rem' }}><Link to='/'><small>Memberships & Subscriptions</small></Link></li>
                          <li style={{ marginLeft: '-5rem' }}><Link to='/'><small>Your Amazon Business Account</small></Link></li>
                          <li style={{ marginLeft: '-5rem' }}><Link to='/'><small>Your Seller Account</small></Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/' className="text-white m-2">
              <div className="w-100 d-flex rounded p-1 hover-border" style={{ justifyCOntent: 'center', alignItems: 'center' }}>
                <button className="border-0 text-white" style={{ height: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: "transparent" }}>
                  <small>Returns & Orders</small>
                </button>
              </div>
            </Link>

            <Link to='/' className="text-white m-2">
              <div className="w-100 d-flex rounded p-1 hover-border" style={{ justifyCOntent: 'center', alignItems: 'center' }}>
                <button className="border-0 text-white" style={{ height: '35px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: "transparent" }}>
                  <small className="d-flex"><FiShoppingCart size="2em" /><b>Cart</b></small>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>


      {/* -------------------------------------------------------- */}
      <div className="" id="collapsibleNavbar"></div>
      <nav className="navbar m-0 p-0" style={{ background: '#232f3e' }}>
        <div className="button_container pt-1 pb-1 pl-2 text-center" id="toggle">
          <button className="navbar-toggler button-icon" type="button" onClick={toggleAccordion} data-toggle="collapse" data-target="#collapsibleNavbar" aria-expanded="false">
            <span className="navbar-toggler-icon mb-1" style={{ backgroundImage: 'none' }}></span>
          </button>
        </div>
        <div className="mr-auto">
          <ul className="mt-0 mb-0 mr-0 ml-3 p-0 d-flex" style={{ listStyleType: 'none' }}>
            <li><Link to='/' className="text-white pl-2 pr-2 nav-link">Today's Deals</Link></li>
            <li><Link to='/' className="text-white pl-2 pr-2 nav-link">Buy Again</Link></li>
            <li><Link to='/' className="text-white pl-2 pr-2 nav-link">Customer Service</Link></li>
            <li><Link to='/' className="text-white pl-2 pr-2 nav-link">Registry</Link></li>
            <li><Link to='/' className="text-white pl-2 pr-2 nav-link">Gift Cards</Link></li>
            <li><Link to='/' className="text-white pl-2 pr-2 nav-link">Sell</Link></li>
          </ul>
        </div>
        <div className={`overlay ${state}`} id="overlay">
          <nav className="overlay-menu">
            <div className="p-3 d-flex justify-content-left align-items-left" style={{ background: '#232f3e' }}><FaUserCircle size='1.5rem' className='text-white' /><span className="text-white pl-3 font-weight-bold" style={{ fontSize: '20px' }}>Hello, Sign in</span></div>
            <ul className="menu m-0 w-100">
              <li className="pl-2 pt-2">
                <h5 className="pl-4 pt-2">Digital Content & Devices</h5>
                <ul className="submenu">
                  <li onClick={toggleClass} className='music'><Link to="/">Nobaggy Music<MdKeyboardArrowRight size='2em' className="arrow" /></Link>
                    <div className={style ? "clicked-category-inner" : "category-inner"}>
                      <h6 onClick={toggleClass} className="pl-5 pt-1 pb-2 mb-0 border border-right-0" style={{}}><span className="d-flex justify-content-left text-dark"><span className="" style={{ fontSize: '18px' }}><BsArrowLeftShort size='2em' />Main Menu</span></span></h6>
                      <ul className="m-0 p-0" style={{ listStyleType: 'none' }}>
                        <h5 className="pl-5 pt-2">Stream Music</h5>
                        <li className="pt-3 pb-3 pl-5"><Link to="/music">Nobaggy Music Unlimited</Link></li>
                        <li className="pt-3 pb-3 pl-5"><Link to="/music">Free Streaming Music</Link></li>
                        <li className="pt-3 pb-3 pl-5"><Link to="/music">Podcasts</Link></li>
                        <li className="pt-3 pb-3 pl-5"><Link to="/music">Open Web Player</Link></li>
                        <li className="pt-3 pb-3 pl-5"><Link to="/music">Download the app</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li onClick={toggleClass2} className='music'><Link to="/">Kindle E-readers & Boks<MdKeyboardArrowRight size='2em' className="arrow" /></Link>
                    <div className={`${style2 ? "clicked-category-inner-2" : "category-inner-2"}`}>
                      <h6 onClick={toggleClass2} className="pl-5 pt-0 pb-2 mb-0 border border-right-0" style={{ cursor: 'pointer' }}><span className="d-flex justify-content-left text-dark"><span className="pt-1" style={{ fontSize: '18px' }}><BsArrowLeftShort size='2em' />Main Menu</span></span></h6>
                      <ul className="m-0 p-0" style={{ listStyleType: 'none' }}>
                        <h5 className="pl-5 pt-2">Kindel E-Readers</h5>
                        <li className="pt-2 pb-2 pl-5"><Link to="/music">Kindle Kids</Link></li>
                        <li className="pt-2 pb-2 pl-5"><Link to="/music">Kindle</Link></li>
                        <li className="pt-2 pb-2 pl-5"><Link to="/music">Kindle Paperwhite</Link></li>
                        <li className="pt-2 pb-2 pl-5"><Link to="/music">Kindle Oasis</Link></li>
                        <li className="pt-2 pb-2 pl-5"><Link to="/music">Accessories</Link></li>
                        <li className="pt-2 pb-2 pl-5"><Link to="/music">See all Kindle E-Readers</Link></li>
                      </ul>
                      <hr />
                      <ul className="m-0 p-0" style={{ listStyleType: 'none' }}>
                        <h5 className="pl-5">Kindel Store</h5>
                        <li className="pt-2 pb-2 pl-5"><Link to="/music">Kindle Books</Link></li>
                        <li className="pt-2 pb-2 pl-5"><Link to="/music">Kindle Unlimited</Link></li>
                        <li className="pt-2 pb-2 pl-5"><Link to="/music">Prime Reading</Link></li>
                        <li className="pt-2 pb-2 pl-5"><Link to="/music">Kindle Vella</Link></li>
                      </ul>
                      <hr />
                      <ul className="m-0 pb-4 pl-0 pr-0 pt-0" style={{ listStyleType: 'none' }}>
                        <h5 className="pl-5">Apps & Resources</h5>
                        <li className="pt-2 pb-2 pl-5"><Link to="/music">Free Kindle Reading Apps</Link></li>
                        <li className="pt-2 pb-2 pl-5"><Link to="/music">Kindle Cloud Reader</Link></li>
                        <li className="pt-2 pb-2 pl-5"><Link to="/music">Manage Your Content and Device</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li onClick={toggleClass3} className='music'><Link to="/">App store for Android<MdKeyboardArrowRight size='2em' className="arrow" /></Link>
                    <div className={style3 ? "clicked-category-inner-3" : "category-inner-3"}>
                      <h6 onClick={toggleClass3} className="pl-5 pt-1 pb-2 mb-0 border border-right-0" style={{}}><span className="d-flex justify-content-left text-dark"><span className="" style={{ fontSize: '18px' }}><BsArrowLeftShort size='2em' />Main Menu</span></span></h6>
                      <ul className="m-0 p-0" style={{ listStyleType: 'none' }}>
                        <h5 className="pl-5 pt-2">Appstore For Android</h5>
                        <li className="pt-3 pb-3 pl-5"><Link to="/music">All Apps and Games</Link></li>
                        <li className="pt-3 pb-3 pl-5"><Link to="/music">Games</Link></li>
                        <li className="pt-3 pb-3 pl-5"><Link to="/music">Nobaggy Conins</Link></li>
                        <li className="pt-3 pb-3 pl-5"><Link to="/music">Download Nobaggy Appstore</Link></li>
                        <li className="pt-3 pb-3 pl-5"><Link to="/music">Nobaggy Apps</Link></li>
                        <li className="pt-3 pb-3 pl-5"><Link to="/music">Your Apps & Subscriptions</Link></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <hr />
              <li className="pl-2 pt-2">
                <h5 className="pl-4">Shop By Department</h5>
                <ul className="submenu">
                  <li><Link to="/">Electronic<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                  <li><Link to="/">Computers<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                  <li><Link to="/">Smart Home<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                  <li><Link to="/">Art & Craft<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                  {showless &&
                    <>
                      <li><Link to="/">Automotive<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                      <li><Link to="/">Baby<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                      <li><Link to="/">Beauti & Personal Care<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                      <li><Link to="/">Women's Fashion<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                      <li><Link to="/">Men's Fashion<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                      <li><Link to="/">Girl's Fashion<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                      <li><Link to="/">Boy's Fashion<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                      <li><Link to="/">Health & Household<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                      <li><Link to="/">Home & Kitchen<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                      <li><Link to="/">Industrial & Scientific<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                      <li><Link to="/">Luggage<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                      <li><Link to="/">Movies & Television<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                      <li><Link to="/">Pet Supplies<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                    </>
                  }
                  <li onClick={() => setShowAll(!showless)}>{showless ? <><span>Show less <MdOutlineKeyboardArrowUp size='1.8em' className="text-secondary" /></span></> : <><span>Show All<MdOutlineKeyboardArrowDown size='1.8em' className="text-secondary" /></span></>}</li>
                </ul>
              </li>
              <hr />
              <li className="pl-2 pt-2">
                <h5 className="pl-4">Programs & Features</h5>
                <ul className="submenu">
                  <li><Link to="/">Gift Cards<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                  <li><Link to="/">Fount It on Nobaggy<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                  <li><Link to="/">Nobaggy Live<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                  <li><Link to="/">International Shopping<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                </ul>
              </li>
              <hr />
              <li className="pl-2 pt-2">
                <h5 className="pl-4">help & Settings</h5>
                <ul className="submenu">
                  <li><Link to="/">Your Account<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                  <li><Link to="/"><BsGlobe size='1em' className="text-secondary mr-2" />English<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                  <li><Link to="/"><GiUsaFlag size='1em' className="text-secondary mr-2" />United State<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                  <li><Link to="/">Customer Service<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                  <li><Link to="/">Sign Out<MdKeyboardArrowRight size='2em' className="arrow" /></Link></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Header;
