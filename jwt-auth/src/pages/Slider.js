import React from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import Img1 from '../images/bucket.jpg'
import Img2 from '../images/light.jpg'
import Img3 from '../images/img3.jpg'
import Img4 from '../images/compare.jpg'
const Slider = () => {
    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div id="demo" className="carousel slide bg-white" data-ride="carousel">
                            <div class="carousel-inner p-3">
                            <h3 className='m-0 p-0'>Frequently repurchased in Home</h3>
                                <div className="carousel-item active">
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <div className='p-3' style={{ height: '280px', width: '100%' }}>
                                                <img src={Img2} alt="Los Angeles" width="80%" />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='p-3' style={{ height: '280px', width: '100%' }}>
                                                <img src={Img3} alt="Los Angeles" width="80%" />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='p-3' style={{ height: '280px', width: '100%' }}>
                                                <img src={Img4} alt="Los Angeles" width="80%" />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='p-3' style={{ height: '280px', width: '100%' }}>
                                                <img src={Img1} alt="Los Angeles" width="80%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <div className='p-3' style={{ height: '280px', width: '100%' }}>
                                                <img src={Img2} alt="Los Angeles" width="80%" />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='p-3' style={{ height: '280px', width: '100%' }}>
                                                <img src={Img3} alt="Los Angeles" width="80%" />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='p-3' style={{ height: '280px', width: '100%' }}>
                                                <img src={Img4} alt="Los Angeles" width="80%" />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='p-3' style={{ height: '280px', width: '100%' }}>
                                                <img src={Img1} alt="Los Angeles" width="80%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='carousel-item'>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <div className='p-3' style={{ height: '280px', width: '100%' }}>
                                                <img src={Img2} alt="Los Angeles" width="80%" />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='p-3' style={{ height: '280px', width: '100%' }}>
                                                <img src={Img3} alt="Los Angeles" width="80%" />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='p-3' style={{ height: '280px', width: '100%' }}>
                                                <img src={Img4} alt="Los Angeles" width="80%" />
                                            </div>
                                        </div>
                                        <div className='col-md-3'>
                                            <div className='p-3' style={{ height: '280px', width: '100%' }}>
                                                <img src={Img1} alt="Los Angeles" width="80%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev w-auto" href="#demo" data-slide="prev">
                                <GrFormPrevious color="black" fontSize="3em"/>
                            </a>
                            <a className="carousel-control-next w-auto" href="#demo" data-slide="next">
                                <GrFormNext color="black" fontSize="3em" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default Slider