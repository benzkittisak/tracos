import React, { Fragment } from "react";

const TitleSection = ({ header, children }) => {
  return (
    <Fragment>
      <div className="category-slider-header">
        <h2>{header}</h2>
      </div>
      <div className="category-slider-subheader">
        <p>
         {children}
        </p>
      </div>
    </Fragment>
  );
};

export default TitleSection;
