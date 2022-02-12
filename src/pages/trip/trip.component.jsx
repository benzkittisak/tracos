import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

import { getRouteDetail } from "../../tat.api";

import Loader from "../../components/loader/loader.component";
import GoogleMaps from "../../components/google-map/google-map.component";

const TripPage = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let fetchData = getRouteDetail(setData, params.routeID);
    setData(fetchData);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="trip-section py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="trip-section-header">
                  <p className="text-muted">{data.number_of_days} วัน</p>
                  <h1>{data.route_name}</h1>
                </div>
              </div>
            </div>

            <div className="row">
              <Accordion defaultActiveKey={0}>
                {data.days.map((detail, index) => (
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>
                      {" "}
                      <span className="days"> {detail.day} </span>{" "}
                      <span>ทริปวันที่ {detail.day}</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="container">
                        {detail.place_stops.map((place, index) => (
                          <div className="row place_stops" key={index}>
                            <div className="col-lg-12">
                              <div className="trip-place">
                                <div className="trip-place-header">
                                  {place.place_name}

                                  <h6 className="trip-des-header">
                                    {place.category_code}
                                  </h6>
                                </div>

                                <div className="trip-place-detail">
                                  <p>{place.place_introduction}</p>
                                </div>

                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="trip-thumbnail">
                                      <img src={place.thumbnail_url} alt="" />
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                      <GoogleMaps latitude={place.latitude} longitude={place.longitude} height={300} borderRadius={16} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TripPage;
