import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// Page
import HomePage from "./pages/home/home.component";
import SearchPage from "./pages/search/search.component";
import PlacePage from "./pages/place/place.component";

// Components
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import "./assets/styles/global.style.scss";
import "swiper/css/bundle";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/travel/*" element={<SearchPage/>} />
        <Route path ="/:placeType/:placeID" element={<PlacePage />}/>
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
