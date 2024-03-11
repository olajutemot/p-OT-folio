import React from "react";
import styles from "./homeSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const width = window.innerWidth;
const height = window.innerHeight;

const HomeSlider = () => {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          padding: "20px",
        }}
      >
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="../p-OT-folio/menu/javascript promise.jpg"
            alt=""
            width={width / 2}
            height={height / 1.5}
            style={{ objectfit: "cover", padding: "20px" }}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="../p-OT-folio/menu/DAY TWO Backend Journey.jpg"
            alt=""
            width={width / 2}
            height={height / 1.5}
            style={{ objectfit: "cover", padding: "20px" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
