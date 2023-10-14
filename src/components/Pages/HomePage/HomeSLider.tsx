"use client";
// import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const HomeSLider = () => {
  const data = ["slider.png", "slider.png", "slider.png"];
  return (
    <>
      <section className="w-full overflow-hidden 2xl:container">
        <div className="">
          <Swiper
            loop={true}
            pagination={true}
            centeredSlides={true}
            modules={[Pagination, Autoplay]}
            speed={3000}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
          >
            {data.map((img, idx) => {
              return (
                <SwiperSlide key={idx} className="!w-full">
                  <img
                    src={`/home/slider/${img}`}
                    alt=""
                    className="2xl:h-[450px] mx-auto"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HomeSLider;
