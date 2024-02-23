import React from "react";
import styles from "./Blog.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const width = window.innerWidth;
const height = window.innerHeight;

const BlogSite = () => {
  return (
    <div>
      <nav className={styles.Navbar}>
        <div className={styles.Icons}>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-plus"></i>
          <i class="fa-regular fa-user"></i>
        </div>
        <div className="anchors">
          <a href="/">Home</a>
          <a href="/">about</a>
        </div>
      </nav>
      <div className={styles.blogContainer}>
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
        >
          <SwiperSlide>
            <img
              src="../p-OT-folio/menu/javascript promise.jpg"
              alt=""
              width={width / 2}
              height={height / 2}
              style={{
                objectfit: "cover",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../p-OT-folio/menu/DAY TWO Backend Journey.jpg"
              alt=""
              width={width / 2}
              height={height / 2}
              style={{ objectfit: "cover" }}
            />
          </SwiperSlide>
        </Swiper>
        <section className={styles.blogCards}>
          <div className={styles.blogCard}>
            <img
              src="../p-OT-folio/menu/project tile 8.png"
              alt=""
              width={width / 4}
            />
            <a href="/">coding</a>
            <h2>This is my first blog title</h2>
            <p>this is my first blog description</p>
            <p>Last Updated: </p>
          </div>
          <div className={styles.blogCard}>
            <img
              src="../p-OT-folio/menu/project tile 8.png"
              alt=""
              width={width / 4}
            />
            <a href="/">coding</a>
            <h2>This is my first blog title</h2>
            <p>this is my first blog description</p>
            <p>Last Updated: </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogSite;
