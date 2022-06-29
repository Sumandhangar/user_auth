import React from 'react';
import { Link } from 'react-router-dom';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import Img1 from '../images/bucket.png'
import Img2 from '../images/light.png'
import Img3 from '../images/board.png'
import Img4 from '../images/compare.png'
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
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img2} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img3} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img4} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img1} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img2} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img3} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img4} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img1} alt="Los Angeles" /></SwiperSlide>
                            <SwiperSlide style={{ height: '350px' }}> <img src={Img4} alt="Los Angeles" /></SwiperSlide>
                        </Swiper> */}



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


                 <div className='container'><div className='row'><div classname='col-12'>
                     <div style="width: 500px; overflow-x: scroll; display: flex;">
<h2>Custom Scrollbar Example</h2>

<p><strong>Note:</strong> The -webkit-scrollbar is not supported in Firefox or in Edge, prior version 79.</p>

<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
</div>
                     </div></div></div>

            <br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default Slider
