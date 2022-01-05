import React, { Fragment } from "react";


import HomeHeaderSlider from "../../components/home-header-slider/home-header-slider.component";
import HomeSearch from "../../components/home-search/home-search.component";
import HomeCategorySlider from '../../components/home-category/home-category.component';


const HomePage = () => {
  
  return (
    <Fragment>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12 col-lg-12 my-3">
            <HomeHeaderSlider />
            <HomeSearch />
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12 col-lg-12">
            <HomeCategorySlider/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
