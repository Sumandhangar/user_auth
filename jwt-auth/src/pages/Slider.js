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



import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];




const Slider = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
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






            <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
        </>
    )
}

export default Slider
