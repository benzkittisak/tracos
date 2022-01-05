import React, { Fragment } from "react";


import HomeHeaderSlider from "../../assets/components/home-header-slider/home-header-slider.component";



const HomePage = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 my-3">
              <HomeHeaderSlider/>
            
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
