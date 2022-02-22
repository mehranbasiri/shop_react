//import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { sliderItems } from "../data";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        className="wrapper"
        navigation
        speed={700}
        pagination={{ clickable: true }}
      >
        {sliderItems.map((item) => (
          <SwiperSlide>
            <div style={{ backgroundColor: item.bg }} className="slide-item">
              <div key={item.id} className="img-container">
                <img src={item.img} />
              </div>
              <div className="info-container">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button>SHOW NOW</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
