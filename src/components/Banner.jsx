import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import startBanner from "../assets/images/start-banner.png";
import borderTextBanner from "../assets/images/border-text-banner.png";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Banner.css";

const bannerContent = [
  {
    description: (
      <>
        We're all about giving children a{" "}
        <strong>safe, loving, and Christian environment</strong> to learn and
        grow. It's a place where fun meets faith, and learning comes in English
        and Spanish.
      </>
    ),
  },
  {
    description: (
      <>
        What makes <strong>our program special is that we're bilingual</strong>,
        Christian, and provide drop-in options!
      </>
    ),
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="banner-wrapper">
      <div className="banner-container-top " />
      <div className="banner-container-bottom " />
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide className="swiper-slide-banner">
          <img src={banner1} alt="banner1" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-banner">
          <img src={banner2} alt="banner2" />
        </SwiperSlide>
      </Swiper>

      <div className="banner-text-container">
        <img
          className="border-text-banner"
          src={borderTextBanner}
          alt="border text banner"
        />
        <img className="start-banner" src={startBanner} alt="start banner" />
        <p>{bannerContent[activeIndex].description}</p>
      </div>
    </div>
  );
};

export default Banner;
