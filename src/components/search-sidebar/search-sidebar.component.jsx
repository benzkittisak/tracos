import React from "react";

import SidebarSearch from "../sidebar-search/sidebar-search.component";
import SidebarCategory from "../sidebar-category/sidebar-category.component";
import SidebarProvince from "../sidebar-province/sidebar-province.component";

import "./search-sidebar.style.scss";

const SearchSidebar = ({ params }) => {

  return (
    <div className="sidebar-container">
        <SidebarSearch params={params}/>
        <SidebarCategory/>
        <SidebarProvince/>
    </div>
  );
};

export default SearchSidebar;
