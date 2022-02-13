import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getEventDetali } from "../../tat.api";

import Loader from "../../components/loader/loader.component";
import GoogleMaps from "../../components/google-map/google-map.component";

const EventPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const params = useParams();

  useEffect(() => {
    let fetchData = getEventDetali(setData, params.eventID);
    setData(fetchData);

    
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="event-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="event-section-image">
                  {data.web_picture_urls ? data.web_picture_urls.map((image, index) => (
                    <img src={image} alt="web_image" key={index} />
                  )) : <img src="https://i3.fpic.cc/file/img-b1/2022/02/13/LazyDev-Icon.png" alt=""/>}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="event-section-content">
                  <div className="event-section-header">
                    <p className="text-muted">
                      {data.display_event_period_date}
                    </p>
                    <h3>{data.event_name}</h3>
                  </div>

                  <div className="event-section-detail">
                    <div dangerouslySetInnerHTML={{__html:data.event_information.event_html_detail}}/>
                  </div>

                  <div className="event-section-contact">
                      <div className="event-section-contact-header">
                            <h3>ติดต่อ</h3>
                            <h6>เบอร์โทรศัพท์</h6>
                            <ul>
                            {data.contact.phones.map((data , index) => <li key={index}>{data}</li> )}

                            </ul>

                      </div>
                  </div>

                  <div className="event-section-location">
                      <h3>แผนที่</h3>
                      <GoogleMaps longitude={data.longitude} latitude={data.latitude} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventPage;
