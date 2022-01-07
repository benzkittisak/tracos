import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { getRecommandedRouteList } from "../../tat.api";

import TitleSection from "../title-section/title-section.componet";

import "./home-recommanded-slider.style.scss";

SwiperCore.use([Navigation]);

const HomeRecommandedSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRecommandedRouteList(setData);
  }, []);

  const params = {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-recom-button-next",
      prevEl: ".swiper-recom-button-prev",
    },
  };

  return (
    <div className="recommanded-slider">
      <div className="recommanded-slider-header">
        <TitleSection header={"ออกทริปเที่ยวที่ไหนกันดี"}>
          เรามีทริปเส้นทางการท่องเที่ยวมาให้คุณเลือกมากมาย
        </TitleSection>

        <div className="swipper-button-container">
          <div className="swiper-recom-button-prev">
            <i className="fal fa-arrow-left"></i>
          </div>
          <div className="swiper-recom-button-next">
            <i className="fal fa-arrow-right"></i>
          </div>
        </div>
      </div>

      <div className="recommanded-slider-container">
        <Swiper {...params}>
          {data.slice(0, 6).map((list, index) => (
            <SwiperSlide key={index}>
              <div className="recommanded-slider-content">
                <div className="recommanded-slider-img">
                  <img src={list.thumbnail_url} alt="" />
                </div>
                <div className="recommanded-slider-text-section">
                  <div className="recommand-date">
                    <p>ระยะเวลา {list.number_of_days} วัน</p>
                  </div>
                  <div className="recommand-title">
                    <h1>{list.route_name}</h1>
                  </div>
                  <div className="recommand-introduction">
                    <h4>รายละเอียดคร่าว ๆ</h4>
                    <p>{list.route_introduction}</p>
                  </div>
                  <div className="recommand-readmore">
                    <Link
                      to={process.env.PUBLIC_URL + "/route/" + list.route_id}
                    >
                      อ่านเพิ่มเติม
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeRecommandedSlider;
