import React from "react";

import DetailMapSection from "../detail-map-section/detail-map-section.component";

const Overview = ({ data, type }) => {
  return (
    <div className="overview-section my-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-2">
            <div className="overview-document-icon">
              <i className="fal fa-file-alt"></i>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="overview-info">
              <p>{data.place_information.introduction ? data.place_information.introduction : 'ไม่พบข้อมูล'}</p>
            </div>
            {type === "accommodation" ? (
              <div className="row">
                <div className="col-lg-4">
                  <div className="overview-open-date">
                    <div className="detail-icon">
                      <i className="fal fa-clock"></i> <h6>เวลาเปิดทำการ</h6>
                    </div>
                    <div className="overview-open-detail">
                      <span>เปิดตลอด</span>
                    </div>
                  </div>
                </div>

                {data.services.payment_methods ? (
                  <div className="col-lg-4">
                    <div className="overview-services-payment">
                      <div className="detail-icon">
                        <i className="fal fa-money-bill-wave"></i>{" "}
                        <h6>ช่องทางการชำระเงิน</h6>
                      </div>

                      <div className="overview-services-payment-detail">
                        <ul>
                          {data.services.payment_methods.map((data, index) => (
                            <li>{data.description}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : null}
                {data.services ? (
                  <div className="col-lg-4">
                    <div className="overview-services">
                      <div className="detail-icon">
                        <i className="fal fa-ballot-check"></i>
                        <h6>บริการเสริม</h6>
                      </div>

                      <div className="overview-open-detail">
                        <ul>
                          {data.services.map((data, index) => (
                            <li key={index}>{data.description}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        <DetailMapSection data={data} />
      </div>
    </div>
  );
};

export default Overview;
