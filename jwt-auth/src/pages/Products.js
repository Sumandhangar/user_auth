import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../images/img1.jpg'
import Img2 from '../images/img2.jpg'
import Img3 from '../images/img3.jpg'
import Img4 from '../images/img4.jpg'
import Keyboard from '../images/keyboard.jpg'
import Mouse from '../images/mouse.jpg'
import Chair from '../images/chair.jpg'
import Headphone from '../images/headphone.jpg'

const Products = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='box p-3 bg-white'>
                        <h5 className='font-weight-bold'>Shop by Category</h5>
                        <div className='img'>
                            <div className='row pt-4'>
                                <div className='col-md-6 category-home'>
                                    <Link to='/'>
                                        <div className='img' style={{ height: '120px' }}>
                                            <img src={Headphone} className='w-150' />
                                        </div>
                                        <p className='p-0 text-dark' style={{ fontSize: '12px' }}>Headsets</p>
                                    </Link>
                                </div>
                                <div className='col-md-6 category-home'>
                                    <Link to='/'>
                                        <div className='img' style={{ height: '120px'}}>
                                            <img src={Keyboard} className='w-100' />
                                        </div>
                                        <p className='p-0 text-dark' style={{ fontSize: '12px' }}>Keyboard</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-md-6 category-home'>
                                    <Link to='/'>
                                        <div className='img' style={{ height: '150px' }}>
                                            <img src={Mouse} className='w-100' />
                                        </div>
                                        <p className='p-0 text-dark' style={{ fontSize: '12px' }}>Mouse</p>
                                    </Link>
                                </div>
                                <div className='col-md-6 category-home'>
                                    <Link to='/'>
                                        <div className='img' style={{ height: '150px'}}>
                                            <img src={Chair} className='w-100' />
                                        </div>
                                        <p className='p-0 text-dark' style={{ fontSize: '12px' }}>Chair</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='row mt-5'>
                <div className='col-md-3'>
                    <div className='box p-3 bg-white'>
                        <h5 className='font-weight-bold'>Shop Father's Day Gifts</h5>
                        <Link to='/'> <div className='img' style={{ height: '275px' }}>
                            <img src={Img1} className='w-100 h-100' />
                        </div> </Link>
                        <div className=''><Link to='/'>Shop Now</Link></div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='box p-3 bg-white'>
                        <h5 className='font-weight-bold'>Shop Father's Day Gifts</h5>
                        <Link to='/'><div className='img' style={{ height: '275px' }}>
                            <img src={Img1} className='w-100 h-100' />
                        </div></Link>
                        <div className=''><Link to='/'>Shop Now</Link></div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='box p-3 bg-white'>
                        <h5 className='font-weight-bold'>Shop Father's Day Gifts</h5>
                        <Link to='/'> <div className='img' style={{ height: '275px' }}>
                            <img src={Img1} className='w-100 h-100' />
                        </div></Link>
                        <div className=''><Link to='/'>Shop Now</Link></div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='box p-3 bg-white'>
                        <h5 className='font-weight-bold'>Shop Father's Day Gifts</h5>
                        <Link to='/'><div className='img' style={{ height: '275px' }}>
                            <img src={Img1} className='w-100 h-100' />
                        </div></Link>
                        <div className=''><Link to='/'>Shop Now</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
