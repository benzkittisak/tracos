import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Lazy , Mousewheel ,Autoplay } from "swiper";
import { Link } from "react-router-dom";
import axios from "axios";

import TitleSection from "../../components/title-section/title-section.componet";

SwiperCore.use([Navigation, Lazy , Mousewheel , Autoplay]);

const HomeEventSlider = () => {
  const [eventData, setEventData] = useState([{}]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://tatapi.tourismthailand.org/tatapi/v5/events?numberOfResult=10&pagenumber=1&filterByUpdateDate=2021/01/30-2022/01/05",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer Gcj63FQ3yW0r(nMfyXTAnR)DP2TZlmeNiTIWnamyKcfWWSI7lB2dLRpw1iS6dd6jAaTlE1eXwYFItfXLK6TeEOm=====2",
        "Accept-Language": "TH",
      },
    })
      .then((res) => setEventData(res.data.result))
      .catch((error) => console.error(error));
  }, []);
  const params = {
    navigation: {
      nextEl: ".swiper-event-button-next",
      prevEl: ".swiper-event-button-prev",
    },
    slidesPerView: 3,
    lazy: true,
    spaceBetween: 10,
    // slidesPerGroupSkip:1,
    watchSlidesProgress: true,
    direction:'horizontal',
    mousewheel:true,
    
  };

  return (
    <div className="event-list-slider">
      <div className="event-list-slider-header-area">
        <TitleSection header={"กิจกรรมใหม่ ๆ รอคุณอยู่"}>
          เลือกเที่ยวจากกิจกรรมที่กำลังจะเกิดขึ้น
        </TitleSection>
        <div className="swipper-button-container">
          <div className="swiper-event-button-prev">
            <i className="fal fa-arrow-left"></i>
          </div>
          <div className="swiper-event-button-next">
            <i className="fal fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="event-slider-container">
        <Swiper {...params}>
          {eventData.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="event-slider-content">
                <Link to={process.env.PUBLIC_URL + `/event/${event.event_id}`}>
                  <div className="event-slider-thumbnail">
                    <img
                      src={
                        event.thumbnail_url
                          ? event.thumbnail_url
                          : "https://i3.fpic.cc/file/img-b1/2022/01/05/Unknown.md.png"
                      }
                      alt=""
                    />
                  </div>
                </Link>
                <div className="event-name">
                  <Link
                    to={process.env.PUBLIC_URL + `/event/${event.event_id}`}
                  >
                    <h5>{event.event_name}</h5>
                  </Link>
                </div>
                <div className="event-date">
                  <p>{event.display_event_period_date}</p>
                </div>
                <div className="event-introduce">
                  <p>{event.event_introduction}</p>
                </div>
                <div className="event-location">
                  <span>{event.location ? event.location : 'ไม่พบข้อมูล'}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeEventSlider;
