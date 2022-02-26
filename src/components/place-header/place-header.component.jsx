import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper";

SwiperCore.use([Navigation, Thumbs]);

const PlaceHeader = ({ images }) => {
  const [thumbsSwiper, setThumbSwiper] = useState(null);

  const sliderMainOption = {
    slidesPerView: 1,
    thumbs: { swiper: thumbsSwiper },
    navigation: {
      nextEl: ".detail-button-next",
      prevEl: ".detail-button-prev",
    },
  };

  const sliderThumbnailOption = {
    slidesPerView: 4,
    watchSlidesProgress: true,
    onSwiper: setThumbSwiper,
    direction: "vertical",
    spaceBetween: 30,
  };

  return (
    <div className="row">
      <div className="col-lg-2 d-flex">
        <Swiper {...sliderThumbnailOption} className="position-relative">
          {images ? images.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="detail-second-slider-image">
                <img src={data} alt="" />
              </div>
            </SwiperSlide>
          )) : null}
        </Swiper>
      </div>
      <div className="col-lg-10">
        <Swiper className="position-relative" {...sliderMainOption}>
          <div className="swiper-main-button">
            <div className="detail-button-prev">
              <span>
                <i className="fal fa-chevron-left"></i>
              </span>
            </div>
            <div className="detail-button-next">
              <span>
                <i className="fal fa-chevron-right"></i>
              </span>
            </div>
          </div>
          {images ? images.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="detail-header-image">
                <img src={data} alt="" />
              </div>
            </SwiperSlide>
          )) : null}
        </Swiper>
      </div>
    </div>
  );
};

export default PlaceHeader;
