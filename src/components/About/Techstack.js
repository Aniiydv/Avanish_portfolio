import React from "react";
import { Col, Row } from "react-bootstrap";
 // C# icon
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";  // HTML, CSS, JS icons
import { SiJquery, SiBootstrap } from "react-icons/si";  // jQuery and Bootstrap
import { DiDotnet } from "react-icons/di";  // .NET Framework

import { DiMysql,  } from "react-icons/di";  // MySQL and Oracle

import {
  
  DiReact,
  DiNodejs,
  
  DiPython

  
} from "react-icons/di";

import { IoLogoNodejs } from "react-icons/io";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      
     
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
         
      
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      
     
      <Col xs={4} md={2} className="tech-icons">
        <DiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
     
     
      
      
       
    </Row>
  );
}

export default Techstack;
