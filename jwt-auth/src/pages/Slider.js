import React from 'react';
import { Link } from 'react-router-dom';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import Img1 from '../images/bucket.png'
import Img2 from '../images/light.png'
import Img3 from '../images/board.png'
import Img4 from '../images/compare.png'
import * as Scroll from 'react-scroll';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";


const Slider = () => {
    return (
        <>





            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        {/* <Swiper
                            slidesPerView={5}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            scrollbar={{
                                hide: true,
                                draggable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation, Scrollbar]}
                            className="mySwiper mt-5"
                        >
                            <SwiperSlide style={{</div> }}> <img src={Img2} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img3} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img4} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img1} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img2} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img3} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img4} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img1} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img4} alt="Los Angeles" /></SwiperSlide>
                        </Swiper> */}


                        <div className='bg-white mb-4 media-scroller snaps-inline' style={{display:'grid', gridAutoFlow:'column', gridAutoColumns:'25%', overflowX:'auto', overscrollBehaviorInline:'contain'}}>
                          <div className='media-element'><div className='p-3 pb-0' style={{ height: '350px', width:'300px'}}><img src={Img2} alt="Los Angeles" width='100%' /></div></div>
                          <div className='media-element'><div className='p-3 pb-0' style={{ height: '350px', width:'300px'}}><img src={Img2} alt="Los Angeles" width='100%' /></div></div>
                          <div className='media-element'><div className='p-3 pb-0' style={{ height: '350px', width:'300px'}}><img src={Img2} alt="Los Angeles" width='100%' /></div></div>
                          <div className='media-element'><div className='p-3 pb-0' style={{ height: '350px', width:'300px'}}><img src={Img2} alt="Los Angeles" width='100%' /></div></div>
                          <div className='media-element'><div className='p-3 pb-0' style={{ height: '350px', width:'300px'}}><img src={Img2} alt="Los Angeles" width='100%' /></div></div>
                          <div className='media-element'><div className='p-3 pb-0' style={{ height: '350px', width:'300px'}}><img src={Img2} alt="Los Angeles" width='100%' /></div></div>
                          <div className='media-element'><div className='p-3 pb-0' style={{ height: '350px', width:'300px'}}><img src={Img2} alt="Los Angeles" width='100%' /></div></div>
                          <div className='media-element'><div className='p-3 pb-0' style={{ height: '350px', width:'300px'}}><img src={Img2} alt="Los Angeles" width='100%' /></div></div>
                          <div className='media-element'><div className='p-3 pb-0' style={{ height: '350px', width:'300px'}}><img src={Img2} alt="Los Angeles" width='100%' /></div></div>
                          <div className='media-element'><div className='p-3 pb-0' style={{ height: '350px', width:'300px'}}><img src={Img2} alt="Los Angeles" width='100%' /></div></div>
                          <div className='media-element'><div className='p-3 pb-0' style={{ height: '350px', width:'300px'}}><img src={Img2} alt="Los Angeles" width='100%' /></div></div>
                          <div className='media-element'><div className='p-3 pb-0' style={{ height: '350px', width:'300px'}}><img src={Img2} alt="Los Angeles" width='100%' /></div></div>
                        </div>




                        <div id="demo" className="carousel slide bg-white" data-ride="carousel">
                            <div className="carousel-inner p-3">
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
                                                <img src={Img3} className='chair' alt="Los Angeles" width="80%" />
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
                                                <img src={Img3} className='chair' alt="Los Angeles" width="80%" />
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
                                                <img src={Img3} className='chair' alt="Los Angeles" width="80%" />
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
                            <Link to='/' className="carousel-control-prev w-auto" href="#demo" data-slide="prev">
                                <GrFormPrevious color="black" fontSize="3em" />
                            </Link>
                            <Link to='/' className="carousel-control-next w-auto" href="#demo" data-slide="next">
                                <GrFormNext color="black" fontSize="3em" />
                            </Link>
                        </div>


                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default Slider