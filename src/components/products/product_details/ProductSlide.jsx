import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function ProductSlide({ images = [] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((img, index) => (
          <SwiperSlide key={`product_slide-${index}`}>
            <Image
              key={2}
              width={16}
              height={9}
              layout="responsive"
              src={img}
              alt={`Product image ${index + 1}`}
              className="w-full h-80 object-cover hover:scale-105    transition-all ease-linear  rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={images.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper justify-center mt-8 h-40"
      >
        {images.map((img, index) => (
          <SwiperSlide key={`slide_thumnail_${index}`}>
            <Image
              key={2}
              src={img}
              width={16}
              height={9}
              layout="responsive"
              alt={`Product image ${index + 1}`}
              className=" object-cover hover:scale-105    transition-all ease-linear  rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
