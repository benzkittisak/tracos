import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getAccommodationDetail } from "../../tat.api";

import Loader from "../../components/loader/loader.component";
import PlaceHeader from "../../components/place-header/place-header.component";
import DetailTitle from "../../components/detail-title/detail-title.component";
import DetailTab from "../../components/detail-tab/detail-tab.component";

const PlacePage = () => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {


    let fetchData = getAccommodationDetail(
      setData,
      params.placeType,
      params.placeID
    );
    setData(fetchData);

    setTimeout(() => {
      setIsLoading(false);
    } , 1000);
  }, []);

  return (
    <div className="detail-page py-4">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <PlaceHeader images={data.web_picture_urls}/>
          
          <div className="row">
            <div className="col-md-12">
              <DetailTitle title={data.place_name} destination={data.destination}/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <DetailTab data={data} type={params.placeType}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlacePage;
