import React from "react";

import { Link } from "react-router-dom";

const PlaceGrid = ({ data }) => {
  return (
    <div className="row">
      {data.map(
        ({
          place_id,
          place_name,
          category_code,
          thumbnail_url,
          category_description,
          location: { province },
          latitude,
          longitude,
        }) => (
          <div className="col-md-4 mb-3" key={place_id}>
            <div className="place-container">
              <div className="place-image">
                <Link to={process.env.PUBLIC_URL + `/${category_code.toLowerCase()}/` + place_id}>
                  <img src={thumbnail_url} alt="" />
                </Link>
              </div>
              <div className="place-content">
                <div className="place-category">
                  <span>{category_code}</span>
                </div>
                <div className="place-title">
                  <Link to={process.env.PUBLIC_URL + `/${category_code.toLowerCase()}/` + place_id}>
                    <h3>{place_name}</h3>
                  </Link>

                  <div className="place-category-des">
                    <span>{category_description}</span>
                  </div>
                </div>

                <div className="place-province">
                  <p>จังหวัด</p>
                  <h3>{province}</h3>
                </div>
                <div className="place-maps">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`}
                    target="_blank"
                  >
                    Google Map
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PlaceGrid;
