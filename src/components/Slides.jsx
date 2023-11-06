import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Button from '@mui/material/Button';
const Slides = () => {
    return (
        <div className='' style={{background: "rgba(255, 244, 246, 0.959)"}}>

            <Swiper
                spaceBetween={100}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper p-5" style={{height:" 75vh" }}
            >
                <SwiperSlide className="d-flex text-center justify-content-around align-items-center" >
                    <img  className='p-5 m-5' src={"2-removebg-preview.png"}></img>
                    <div className="d-flex flex-column justify-content-around align-items-center">
                        <h1>
                            FESTIVAL COLLECTION
                        </h1>
                        <h4>DON'T COMPROMISE ON STYLES! GET UPTO 30% OFF ON FESTIVAL COLLECTION! </h4>
                        <Button variant="outlined">Explore</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="d-flex text-center justify-content-around align-items-center">
                    <img className='m-5 p-5' src={"pngtree-big-sale-label-design-upto-tag-png-image_1059161-removebg-preview.png"}></img>
                    <div className="d-flex flex-column justify-content-around align-items-center">
                        <h1>
                            Festival Collection
                        </h1>
                        <h4>DON'T COMPROMISE ON STYLES! GET UPTO 30% OFF ON FESTIVAL COLLECTION! </h4>
                        <Button variant="outlined">Explore</Button>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="d-flex text-center justify-content-around align-items-center">
                    <img className='m-5 p-5' src={"lovepik-fashion-womens-summer-shopping-image-png-image_400391997_wh1200-removebg-preview.png"}></img>
                    <div className="d-flex flex-column justify-content-around align-items-center">
                        <h1>
                            SUMMER COLLECTION
                        </h1>
                        <h4>DON'T COMPROMISE ON STYLES! GET UPTO 30% OFF ON FESTIVAL COLLECTION! </h4>
                        <Button variant="outlined">Explore</Button>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Slides