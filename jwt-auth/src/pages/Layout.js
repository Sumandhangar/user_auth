
import React from 'react';
import { Categories } from './Categories';
import Products from './Products';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import Banner1 from '../images/banner-4.png'
import Banner2 from '../images/banner-2.jpg'
import Banner3 from '../images/banner-5.jpg'

const Layout = () => {
  return (
    <>

      <div className='container-fluid' style={{ zIndex: '-5' }}>
        <div className='row'>
          <div className='col-md-12 m-0 p-0'>
            <div id="demo" className="carousel slide bg-white" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Banner1} className='w-100' alt='banner' />
                </div>
                <div className="carousel-item">
                  <img src={Banner2} className='w-100' alt='banner' />
                </div>
                <div className='carousel-item'>
                  <img src={Banner3} className='w-100' alt='banner' />
                </div>
              </div>
              <Link to='/' className="carousel-control-prev w-auto" href="#demo" data-slide="prev">
                <GrFormPrevious color="black" fontSize="3em" />
              </Link>
              <Link to='/' className="carousel-control-next w-auto" href="#demo" data-slide="next">
                <GrFormNext color="black" fontSize="3em" />
              </Link>
            </div>
            <Categories style={{ zIndex: '5', marginTop: '-18rem' }} />
            <Products />
            <Slider />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout