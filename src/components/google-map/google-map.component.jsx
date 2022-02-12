import React from "react";

const GoogleMaps = ({latitude, longitude , height , borderRadius}) => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="Google Maps"
          width="100%"
          height={`${height ? height : '500'}`}
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          style={{borderRadius: borderRadius ? borderRadius : 0}}
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMaps;
