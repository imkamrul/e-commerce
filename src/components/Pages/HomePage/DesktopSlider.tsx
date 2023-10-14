"use client";
import { useRef } from "react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const SwiperConfig = {
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  slidesPerView: 7,
  watchSlidesProgress: true,
  spaceBetween: 0,
  grabCursor: true,
};
const DesktopSlider = () => {
  const swiperRef = useRef();

  SwiperCore.use([Autoplay, Parallax]);
  const onInit = (Swiper: any) => {
    swiperRef.current = Swiper;
  };

  const data = [
    "brand (1).png",
    "brand (2).png",
    "brand (3).png",
    "brand (4).png",
    "brand (5).png",
    "brand (7).png",
    "brand (1).png",
    "brand (2).png",
    "brand (3).png",
    "brand (4).png",
    "brand (5).png",
  ];
  const testimonialsMobileViewTow = data.map((img, idx) => {
    return (
      <SwiperSlide key={idx}>
        <div className="bg-[white] shadow-[0px_2px_40px_0px_rgba(0,0,0,0.03)] h-[135px] w-[156px] rounded-[6px] flex items-center justify-center">
          <img src={`/home/brand/${img}`} alt="" className="bg-white" />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <section className="container">
        <p className="text-[#303030] text-2xl font-semibold pb-4">
          Our Brand Partners
        </p>
        <div className="flex w-full flex-wrap relative pb-10">
          <Swiper {...SwiperConfig} onInit={onInit}>
            {testimonialsMobileViewTow}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default DesktopSlider;
