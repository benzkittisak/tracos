import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-nav-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-lg-9">
            <div className="header-logo-container">
              <div className="header-logo">
                <img
                  src="https://i3.fpic.cc/file/img-b1/2022/01/05/MINI-FOREST-tr.th.png"
                  alt=""
                />
              </div>

              <div className="header-nav-container d-none d-lg-block">
                <ul>
                  <li>
                    <Link className="header-brand-nav" to={process.env.PUBLIC_URL + "/"}>
                      <h3>TRACOS</h3>
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/attraction"}>
                      สถานที่ท่องเที่ยว
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/restaurant"}>
                      ร้านอาหาร
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/shopping"}>
                      ร้านค้า
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="header-sign-in-sign-up-container">
              <ul>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/signin"}>
                    เข้าสู่ระบบ
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/signup"}>
                    สมัครสมาชิก
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
