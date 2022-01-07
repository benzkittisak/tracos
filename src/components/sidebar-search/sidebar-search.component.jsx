import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SidebarSearch = ({ params }) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const location = useLocation().search;

  const handleSubmit = (e) => {
    e.preventDefault();

    let url = new URLSearchParams(location);
    url.set("keyword", keyword);

    let newUrl = url.toString();

    navigate(
      process.env.PUBLIC_URL + `/travel?${newUrl}`
    );
  };

  return (
    <div className="sidebar-widget">
      <div className="sidebar-search">
        <h4 className="sidebar-title">ค้นหา</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="พิมคำค้น"
            value={keyword}
          />
          <button>
            <i className="fal fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SidebarSearch;
