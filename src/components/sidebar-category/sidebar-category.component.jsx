import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { setActiveClassToSort } from "../../assets/utils/utils";

import CATEGORY_DATA from "../../assets/data/category.data";


const SidebarCategory = () => {
  const navigate = useNavigate();
  const location = useLocation().search;

  const handleClick = (params , value) => {
    let url = new URLSearchParams(location);
    url.set(params , value)

    let newUrl = url.toString();

    navigate(process.env.PUBLIC_URL + '/travel?' + newUrl);
    

  };
  

  return (
    <div className="sidebar-widget">
      <div className="sidebar-search">
        <h4 className="sidebar-title">เลือกตามประเภท</h4>
        <div className="sidebar-category-list">
          <ul>
            {CATEGORY_DATA.map((item, index) => (
              <li key={index}>
                <div className="sidebar-category-list-left">
                  <button
                    type="button"
                    onClick={(e) => {
                      handleClick('search',item.url);
                      setActiveClassToSort(e);
                    }}
                  >
                    <span className="checkMark"/>
                    {item.name}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarCategory;
