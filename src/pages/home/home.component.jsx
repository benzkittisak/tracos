import React, { Fragment } from "react";


import HomeHeaderSlider from "../../assets/components/home-header-slider/home-header-slider.component";
import HomeSearch from "../../assets/components/home-search/home-search.component";

const HomePage = () => {


  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 my-3">
            <HomeHeaderSlider />
            <HomeSearch/>
           
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
