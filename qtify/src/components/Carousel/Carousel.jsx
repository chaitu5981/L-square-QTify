import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import React, { useState } from "react";
import Album from "../Album/Album";
import "swiper/css/navigation";
import "./Carousel.css";
const Carousel = ({ items }) => {
  const [showEndBtn, setShowEndBtn] = useState(true);
  const [showStartBtn, setShowStartBtn] = useState(false);
  return (
    <Swiper
      spaceBetween={10}
      dir="ltr"
      navigation={true}
      onReachEnd={(e) => setShowEndBtn(false)}
      onInit={() => setShowEndBtn(true)}
      onReachBeginning={(e) => setShowStartBtn(false)}
      onSlideChange={() => {
        showEndBtn || setShowEndBtn(true);
        showStartBtn || setShowStartBtn(true);
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
      modules={[Navigation]}
      className={`${showStartBtn ? "show1" : "hide1"} ${
        showEndBtn ? "show2" : "hide2"
      }`}
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
