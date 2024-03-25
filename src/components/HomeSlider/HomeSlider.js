import React, { useState, useEffect } from "react";
import styles from "./homeSlider.module.css";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const width = window.innerWidth;
const height = window.innerHeight;

const HomeSlider = () => {
  const [blogs, setBlogs] = useState([]);

  const get10latestblogs = () => {
    fetch("http://localhost:8000/blog", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.ok) {
          console.log(response);
          setBlogs(response.data.blogs);
        } else {
          toast(response.message, {
            type: "error",
          });
        }
      })
      .catch((error) => {
        toast(error.message, {
          type: "error",
        });
      });
  };

  useEffect(() => {
    get10latestblogs();
  }, []);

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
