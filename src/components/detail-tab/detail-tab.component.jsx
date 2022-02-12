import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import Overview from "../overview-section/overview.component";
import InfoSection from "../info-section/info-section.component";
import DetailContactSection from "../detail-contact-section/detail-contact-section.component";

const DetailTab = ({ data, type }) => {
  return (
    <div className="detail-tab">
      <Tab.Container defaultActiveKey="overview">
        <Nav
          variant="pills"
          className="detail-tab-section justify-content-center text-center"
        >
          <Nav.Item>
            <Nav.Link eventKey={"overview"}>
              <h4>Overview</h4>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={"info"}>
              <h4>Info</h4>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={"contact"}>
              <h4>Contact</h4>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey={"overview"}>
            <Overview data={data} type={type} />
          </Tab.Pane>
          <Tab.Pane eventKey={"info"}>
            <InfoSection data={data} />
          </Tab.Pane>
          <Tab.Pane eventKey={"contact"}>
              <DetailContactSection data={data} />
            
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default DetailTab;
