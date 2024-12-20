"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import ImageOverlay from "components/ImageOverlay";

export default function ShowcaseProducts() {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      loop={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Navigation, Pagination]}
      className="mySwiper space-x-2"
    >
      <SwiperSlide>
        <div className="w-full h-60 rounded-md  overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1601758261049-55d060e1159a?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3N8ZW58MHx8MHx8fDA%3D"
            title="Beautiful dogs"
            alt=""
            className=" object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 to-black/0 pointer-events-none" />
          <div className="absolute bottom-10 left-5 text-white z-20">
            <h1 className="text-2xl font-bold m-0">{"title"}</h1>
            <p className="text-base mt-2">{"description"}</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-60 rounded-md  overflow-hidden">
          <img
            src="https://images.pexels.com/photos/19820055/pexels-photo-19820055/free-photo-of-cute-dog-in-paw-socks-on-winter-ground.jpeg?auto=compress&cs=tinysrgb&w=1460&dpr=1"
            title="Beautiful dogs"
            alt=""
            className=" object-cover object-center"
          />
         
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 to-black/0 pointer-events-none" />
          <div className="absolute bottom-10 left-5 text-white z-20">
            <h1 className="text-2xl font-bold m-0">American Bull Dog</h1>
            <p className="text-base mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              impedit ab temporibus aspernatur ullam blanditiis animi nulla?
              Dolorem!
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-60 rounded-md bg-blend-multiply bg-green-400">
        <img
            src="https://res.cloudinary.com/dozd0nyze/image/upload/v1734303883/puppy_app/products/Alaskan-Malamute-1_i6ufvy.jpg"
            title="Beautiful dogs"
            alt=""
            className=" object-cover object-center bg-blend-multiply"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 to-black/0 pointer-events-none" />
          <div className="absolute bottom-10 left-5 text-white z-20">
            <h1 className="text-2xl font-bold m-0">Alaskan Malamute</h1>
            <p className="text-base mt-2">{"description"}</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-60 rounded-md  bg-red-400"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-60 rounded-md  bg-gray-400"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-60 rounded-md  bg-red-400"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-60 rounded-md  bg-red-400"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-60 rounded-md  bg-red-400"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-60 rounded-md  bg-red-400"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-60 rounded-md  bg-red-400"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-60 rounded-md  bg-red-400"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-60 rounded-md  bg-red-400"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-60 rounded-md  bg-red-400"></div>
      </SwiperSlide>
    </Swiper>
  );
}
