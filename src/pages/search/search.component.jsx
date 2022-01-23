import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { getPlaceSearch } from "../../tat.api";

import SearchSidebar from "../../components/search-sidebar/search-sidebar.component";
import PlaceGrid from "../../components/place-grid/place-grid.componet";

import "./search.style.scss";

const SearchPage = () => {
  const location = useLocation().search;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchParam = new URLSearchParams(location).get("search");
  const keywordParam = new URLSearchParams(location).get("keyword");
  const provinceParam = new URLSearchParams(location).get("provinceName");

  // Pagination

  useEffect(() => {
    window.scrollTo(0, 0);
    let keyword = "";
    let province = "";
    if (keywordParam) {
      keyword = keywordParam;
    }
    if (provinceParam) {
      province = provinceParam;
    }
    setData(getPlaceSearch(setData, searchParam, keyword, province));
    setIsLoading(false);
  }, [searchParam, keywordParam, provinceParam]);

  return (
    <div className="search-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <SearchSidebar params={searchParam} />
          </div>
          <div className="col-lg-9">
            { isLoading ? <h2>Loading</h2> : <PlaceGrid data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
