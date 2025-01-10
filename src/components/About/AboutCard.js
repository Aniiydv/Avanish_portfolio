import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Deepanshu Methi</span> from <span className="purple">Noida, India.</span>
          <br />
          Currently pursuing Bachelor of Technology in Computer Science and Engineering at NIET, Greater Noida.
          <br />
          <br />
          Apart from coding, I enjoy indulging in various activities:
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Playing Games
          </li>
          <li className="about-activity">
            <ImPointRight /> Trading
          </li>
          <li className="about-activity">
            <ImPointRight /> Travelling
          </li>
        </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is like humor. When you have to explain it, it’s bad!"{" "}
          </p>
         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
