
import React, { useState } from 'react';
import { Categories } from './Categories';
import Products from './Products';
import Slider from './Slider';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import Banner1 from '../images/banner-4.png'
import Banner2 from '../images/banner-2.jpg'
import Banner3 from '../images/banner-5.jpg'

const Layout = () => {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 m-0 p-0'>
            <div id="demo" className="carousel slide bg-white" data-ride="carousel">
              <div class="carousel-inner">
                <div className="carousel-item active">
                  <img src={Banner1} className='w-100' />
                </div>
                <div className="carousel-item">
                  <img src={Banner2} className='w-100' />
                </div>
                <div className='carousel-item'>
                  <img src={Banner3} className='w-100' />
                </div>
              </div>
              <a className="carousel-control-prev w-auto" href="#demo" data-slide="prev">
                <GrFormPrevious color="black" fontSize="3em" />
              </a>
              <a className="carousel-control-next w-auto" href="#demo" data-slide="next">
                <GrFormNext color="black" fontSize="3em" />
              </a>
            </div>
            <Categories />
            <Products />
            <Slider />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout