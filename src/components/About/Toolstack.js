import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  
  
  SiVercel,
 SiVisualstudio,
  
  SiMysql,
 SiMicrosoftsqlserver,
  SiOracle
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver/>
      </Col>
      
    </Row>
  );
}

export default Toolstack;
