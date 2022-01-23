import React from 'react';

import DetailMapSection from "../detail-map-section/detail-map-section.component";

const InfoSection = ({data}) => {
    return(
        <div className="info-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="overview-document-icon">
                <i className="fal fa-file-alt"></i>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="info-title">
                <p className="text-muted">
                  {data.place_information.detail ? data.place_information.detail : 'ไม่พบข้อมูล'}
                </p>
              </div>
              <div className="container py-5">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="detail-icon">
                      <i className="fal fa-map-marker-smile"></i>
                      <h6>ที่ตั้ง</h6>
                    </div>
                    <div className="overview-open-detail">
                        <p>{data.location.address}</p>
                        <p>{data.location.sub_district}</p>
                        <p>{data.location.district}</p>
                        <p>{data.location.province}</p>
                        <p>{data.location.postcode}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DetailMapSection data={data} />
        </div>
      </div>
    )
}

export default InfoSection;