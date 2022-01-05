import React, { useState } from "react";

import PROVINCE_DATA from '../../assets/data/province.data';

// import "./home-search.style.scss";

const HomeSearch = () => {
  const [searchData, setSearchData] = useState({
    keyword: "",
    provinceName: "",
    categorycodes: "ALL",
  });

  const { keyword, provinceName, categorycodes } = searchData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };
  return (
    <div className="home-search-area">
      <form className="row">
        <div className="col-md-3 col-lg-3">
          <label className="home-search-label" htmlFor="provinceName">
            จังหวัด
          </label>
          <select
            onChange={handleChange}
            name="provinceName"
            value={provinceName}
            className="home-search-select"
          >
            <option value="">ทั้งหมด</option>
            {PROVINCE_DATA.map(({ id, name_en, name_th }) => (
              <option key={id} value={name_en}>
                {name_th}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3 col-lg-3">
          <label className="home-search-label" htmlFor="categorycodes">
            ประเภท
          </label>
          <select
            onChange={handleChange}
            name="categorycodes"
            value={categorycodes}
            className="home-search-select"
          >
            <option value="ALL">ทั้งหมด</option>
            <option value="SHOP">ร้านค้า</option>
            <option value="RESTAURANT">ร้านอาหาร</option>
            <option value="ACCOMMODATION">โรงแรม</option>
            <option value="ATTRACTION">สถานที่ท่องเที่ยว</option>
            <option value="OTHER">อื่น ๆ</option>
          </select>
        </div>
        <div className="col-md-3 col-lg-3">
          <label className="home-search-label" htmlFor="keyword">
            คำค้น
          </label>
          <input
            type="search"
            onChange={handleChange}
            name="keyword"
            value={keyword}
            placeholder="พิมพ์คำค้น"
          />
        </div>
        <div className="col-md-2 col-lg-2 offset-md-1">
          <button className="home-search-btn" type="submit">
            <i className="fal fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeSearch;
