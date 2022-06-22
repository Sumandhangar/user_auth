import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='container-fluid' style={{ background: '#37475A' }}>
                <div className='row'>
                    <div className='col-md-12 text-center pt-2 pb-2'>
                        <small className='text-white'>Back to top</small>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ background: '#232F3E' }}>
                <div className='container'>
                    <div className='row pt-5 pb-5 text-white footer'>
                        <div className='col-md-3'>
                            <ul>
                                <p className='font-weight-bolder'>Get to Know Us</p>
                                <li><Link to='/'>Careers</Link></li>
                                <li><Link to='/'>Blog</Link></li>
                                <li><Link to='/'>About nobaggy</Link></li>
                                <li><Link to='/'>Investor relation</Link></li>
                                <li><Link to='/'>Nobaggy Device</Link></li>
                                <li><Link to='/'>Nobaggy Science</Link></li>
                            </ul>
                        </div>
                        <div className='col-md-3'>
                            <ul>
                                <p className='font-weight-bolder'>Make Money with Us</p>
                                <li><Link to='/'>Sell products on Nobaggy</Link></li>
                                <li><Link to='/'>Sell on Nobaggy Business</Link></li>
                                <li><Link to='/'>Sell apps on Nobaggy</Link></li>
                                <li><Link to='/'>Become an Affiliate</Link></li>
                                <li><Link to='/'>Advertise Your Products</Link></li>
                                <li><Link to='/'>Self-Publish with Us</Link></li>
                                <li><Link to='/'>Host an Nobaggy Hub</Link></li>
                                <li><Link to='/'>See More Make Money with Us</Link></li>
                            </ul>
                        </div>
                        <div className='col-md-3'>
                            <ul>
                                <p className='font-weight-bolder'>Nobaggy Payment Products</p>
                                <li><Link to='/'>Nobaggy Business Card</Link></li>
                                <li><Link to='/'>Shop with Points</Link></li>
                                <li><Link to='/'>Reload Your Balance</Link></li>
                                <li><Link to='/'>Nobaggy Currency Converter</Link></li>
                            </ul>
                        </div>
                        <div className='col-md-3'>
                            <ul>
                                <p className='font-weight-bolder'>Let Us Help You</p>
                                <li><Link to='/'>Nobaggy and COVID-19</Link></li>
                                <li><Link to='/'>Your Account</Link></li>
                                <li><Link to='/'>Your Orders</Link></li>
                                <li><Link to='/'>Shipping Rates & Policies</Link></li>
                                <li><Link to='/'>Returns & Replacements</Link></li>
                                <li><Link to='/'>Manage Your Content and Devices</Link></li>
                                <li><Link to='/'>Nobaggy Assistant</Link></li>
                                <li><Link to='/'>Help</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ background: '#131A22' }}>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8 footer'>
                        <ul className='pt-3' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <li><Link to='/'><small>Contitions of Use</small></Link></li>
                            <li><Link to='/'><small>Privacy Notice</small></Link></li>
                            <li><Link to='/'><small>Interest Based Ads</small></Link></li>
                            <small style={{ color: '#DDD' }}>© 1996-2022, Amazon.com, Inc. or its affiliates</small>
                        </ul>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
        </>
    )
}

export default Footer