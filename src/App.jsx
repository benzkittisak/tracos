import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// Page
import HomePage from "./pages/home/home.component";

// Components
import Header from "./components/header/header.component";

import "./assets/styles/global.style.scss";
import "swiper/css/bundle";

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
      </Routes>
    </Fragment>
  );
};

export default App;
