import React from "react";
import { Link } from "react-router-dom";

const DetailContactSection = ({ data }) => {
  return (
    <div className="contact-section">
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-2">
            <div className="overview-document-icon">
              <i className="fal fa-file-alt"></i>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-4 mb-5">
                <div className="contact-content">
                  <div className="detail-icon">
                    <i className="fal fa-phone-alt"></i>
                    <h6>โทร</h6>
                  </div>
                  <div className="overview-open-detail">
                    {data.contact.phones ? data.contact.phones : "-"}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="contact-content">
                  <div className="detail-icon">
                    <i className="fal fa-mobile"></i>
                    <h6>เบอร์โทรศัพท์</h6>
                  </div>
                  <div className="overview-open-detail">
                    {data.contact.mobiles ? data.contact.mobiles : "-"}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="contact-content">
                  <div className="detail-icon">
                    <i className="fal fa-fax"></i>
                    <h6>Fax</h6>
                  </div>
                  <div className="overview-open-detail">
                    {data.contact.fax ? data.contact.fax : "-"}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="contact-content">
                  <div className="detail-icon">
                    <i className="fal fa-envelope"></i>
                    <h6>อีเมล</h6>
                  </div>
                  <div className="overview-open-detail">
                    {data.contact.emails ? data.contact.emails : "-"}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="contact-content">
                  <div className="detail-icon">
                    <i className="fal fa-globe-asia"></i>
                    <h6>เว็บไซต์</h6>
                  </div>
                  <div className="overview-open-detail">
                    {data.contact.urls ? (
                      <Link to={data.contact.urls}>{data.contact.urls}</Link>
                    ) : (
                      "-"
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContactSection;
