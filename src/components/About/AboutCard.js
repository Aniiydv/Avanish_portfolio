import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Avanish Yadav</span> from <span className="purple">Azamgarh, India.</span>
          <br />
          Experienced .NET Developer with a strong background in ERP solutions and full-stack web development. Proficient in <span className="purple" >C#, Python, SQL, HTML, CSS, JavaScript, and Bootstrap </span>.
          <br />
           Skilled in designing and implementing scalable, secure, and performance-optimized applications. Passionate about collaborating with cross-functional teams to deliver high-quality software solutions.
          <br />
          <br />
          Apart from coding, I enjoy indulging in various activities:
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Music
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
