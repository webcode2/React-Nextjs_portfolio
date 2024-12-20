"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ImageOverlay from "components/ImageOverlay";
export default function Carosel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" w-full">
            <ImageOverlay
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit hic unde corrupti ratione, impedit enim a debitis."
              imageSrc="https://images.pexels.com/photos/3361692/pexels-photo-3361692.jpeg"
              title="Beautiful dogs"
            />
          </div>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
