import React from "react";

import GoogleMaps from "../google-map/google-map.component";

const DetailMapSection = ({ data:{latitude , longitude} }) => {
  return (
    <div className="row mb-5">
      <div className="col-lg-2">
        <div className="overview-document-icon">
          <i className="fal fa-map"></i>
        </div>
      </div>
      <div className="col-lg-10">
        <GoogleMaps latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
};

export default DetailMapSection;
