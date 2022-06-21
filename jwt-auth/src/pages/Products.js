import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../images/img1.jpg'

const Products = () => {
    return (
        <div className='container-fluid'>
            <div className='row mt-5'>
                <div className='col-lg-3 col-md-6'>
                    <div className='box p-3 bg-white'>
                        <h5 className='font-weight-bold'>Shop Father's Day Gifts</h5>
                        <Link to='/'> <div className='img' style={{ height: '275px' }}>
                            <img src={Img1} className='w-100 h-100' alt='product'/>
                        </div> </Link>
                        <div className=''><Link to='/'>Shop Now</Link></div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 mt-lg-0 mt-md-0 mt-3'>
                    <div className='box p-3 bg-white'>
                        <h5 className='font-weight-bold'>Shop Father's Day Gifts</h5>
                        <Link to='/'><div className='img' style={{ height: '275px' }}>
                            <img src={Img1} className='w-100 h-100' alt='product' />
                        </div></Link>
                        <div className=''><Link to='/'>Shop Now</Link></div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 mt-lg-0 mt-md-3 mt-3'>
                    <div className='box p-3 bg-white'>
                        <h5 className='font-weight-bold'>Shop Father's Day Gifts</h5>
                        <Link to='/'> <div className='img' style={{ height: '275px' }}>
                            <img src={Img1} className='w-100 h-100' alt='product' />
                        </div></Link>
                        <div className=''><Link to='/'>Shop Now</Link></div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 mt-lg-0 mt-md-3 mt-3'>
                    <div className='box p-3 bg-white'>
                        <h5 className='font-weight-bold'>Shop Father's Day Gifts</h5>
                        <Link to='/'><div className='img' style={{ height: '275px' }}>
                            <img src={Img1} className='w-100 h-100' alt='product' />
                        </div></Link>
                        <div className=''><Link to='/'>Shop Now</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
