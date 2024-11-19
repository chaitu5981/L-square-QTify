import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import React from "react";
import Album from "../Album/Album";
import "swiper/css/navigation";
import "./Carousel.css";
const Carousel = ({ items }) => {
  return (
    <Swiper
      spaceBetween={10}
      dir="rtl"
      navigation={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        600: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        900: {
          slidesPerView: 5,
          spaceBetween: 40,
        },

        1300: {
          slidesPerView: 7,
          spaceBetween: 50,
        },
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {items.map(({ id, image, follows, title }) => (
        <SwiperSlide key={id}>
          <Album image={image} follows={follows} title={title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
