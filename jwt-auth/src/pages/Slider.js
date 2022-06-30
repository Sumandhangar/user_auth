import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Img1 from '../images/bucket.png'
import Img2 from '../images/light.png'
import Img3 from '../images/board.png'
import Img4 from '../images/compare.png'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";

import { Navigation, Pagination, Scrollbar,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';








const Slider = () => {
    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            scrollbar={{
                                hide: true,
                                draggable: true,
                            }}
                            // navigation={true}
                            modules={[Autoplay, Pagination, Navigation, Scrollbar]}
                            className="mySwiper mt-5 mb-5 bg-light p-3"
                            style={{ overflowX: 'scroll' }}
                        >
                            <SwiperSlide style={{ height: '250px' }}> <img src={Img2} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '250px' }}> <img src={Img3} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '250px' }}> <img src={Img4} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '250px' }}> <img src={Img1} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '250px' }}> <img src={Img2} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '250px' }}> <img src={Img3} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '250px' }}> <img src={Img4} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '250px' }}> <img src={Img1} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '250px' }}> <img src={Img4} alt="Los Angeles" /></SwiperSlide>
                        </Swiper>












                        <div id="demo" className="carousel slide bg-light" data-ride="carousel">
                            <ul className="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" className="active bg-dark"></li>
                                <li data-target="#demo" data-slide-to="1" className='bg-dark'></li>
                                <li data-target="#demo" data-slide-to="2" className='bg-dark'></li>
                            </ul>
                            <div className="carousel-inner pl-2 pt-2 pb-2">
                                <h4 className='m-0 pl-5 pb-0 pt-2'>Frequently repurchased in Home Carousel</h4>
                                <div className="carousel-item active">
                                    <div className='d-flex'>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img1} alt="Los Angeles" width="60%" />
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img2} alt="Los Angeles" width="60%" />
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img3} alt="Los Angeles" width="60%" />
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img4} alt="Los Angeles" width="60%" />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='d-flex'>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img3} alt="Los Angeles" width="60%" />
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img1} alt="Los Angeles" width="60%" />
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img2} alt="Los Angeles" width="60%" />
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img4} alt="Los Angeles" width="60%" />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='d-flex'>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img2} alt="Los Angeles" width="60%" />
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img4} alt="Los Angeles" width="60%" />
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img3} alt="Los Angeles" width="60%" />
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img3} alt="Los Angeles" width="60%" />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className='d-flex'>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img1} alt="Los Angeles" width="60%" />
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img2} alt="Los Angeles" width="60%" />
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img3} alt="Los Angeles" width="60%" />
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img4} alt="Los Angeles" width="60%" />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='d-flex'>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img1} alt="Los Angeles" width="60%" />
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img4} alt="Los Angeles" width="60%" />
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img3} alt="Los Angeles" width="60%" />
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center p-2' style={{ height: '280px', width: '25%' }}>
                                            <img src={Img2} alt="Los Angeles" width="60%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev bg-dark" href="#demo" data-slide="prev" style={{ height: '100px', width: '40px', borderRadius: '0 5px 5px 0', marginTop: '10%' }}>
                                <span className="carousel-control-prev-icon text-black"></span>
                            </a>
                            <a className="carousel-control-next bg-dark" href="#demo" data-slide="next" style={{ height: '100px', width: '40px', borderRadius: '5px 0 0 5px', marginTop: '10%' }}>
                                <span className="carousel-control-next-icon text-black"></span>
                            </a>
                        </div>









                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, , Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            // navigation={true}
                            loop={true}
                            // pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            onSlideChange={() => console.log('slide change')}
                            className='bg-light mt-5' style={{overflow:'hidden'}}
                        >
                            <SwiperSlide className='d-flex justify-content-center align-items-center w-100'>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img2} alt="Los Angeles" width="60%" />
                                </div>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img3} className='chair' alt="Los Angeles" width="60%" />
                                </div>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img4} alt="Los Angeles" width="60%" />
                                </div>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img1} alt="Los Angeles" width="60%" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='d-flex justify-content-center align-items-center w-100'>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img2} alt="Los Angeles" width="60%" />
                                </div>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img3} className='chair' alt="Los Angeles" width="60%" />
                                </div>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img4} alt="Los Angeles" width="60%" />
                                </div>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img1} alt="Los Angeles" width="60%" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='d-flex justify-content-center align-items-center w-100'>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img2} alt="Los Angeles" width="60%" />
                                </div>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img3} className='chair' alt="Los Angeles" width="60%" />
                                </div>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img4} alt="Los Angeles" width="60%" />
                                </div>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img1} alt="Los Angeles" width="60%" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='d-flex justify-content-center align-items-center w-100'>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img2} alt="Los Angeles" width="60%" />
                                </div>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img3} className='chair' alt="Los Angeles" width="60%" />
                                </div>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img4} alt="Los Angeles" width="60%" />
                                </div>
                                <div className='p-1 d-flex justify-content-center align-items-center' style={{ height: '280px', width: '25%' }}>
                                    <img src={Img1} alt="Los Angeles" width="60%" />
                                </div>
                            </SwiperSlide>
                        </Swiper>






                    </div>
                </div>
            </div>







            




            <br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default Slider
