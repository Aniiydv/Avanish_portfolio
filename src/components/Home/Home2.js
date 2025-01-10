import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import emailjs from '@emailjs/browser';
import Notiflix from 'notiflix';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { RiMailFill, RiMessage3Fill } from "react-icons/ri";

function Home2() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_hox1c6i", // Your service ID
        "template_44uv26c", // Your template ID
        e.target,
        "vzP4he-Yos7iCkpcl" // Your user ID
      )
      .then(
        (result) => {
          setStateMessage('Message sent successfully!');
          Notiflix.Report.success(
            'Success',
            "", // Corrected to use response.data.message
            'Okay'
        );
          setIsSubmitting(false);
          e.target.reset(); // Clear form after successful submission
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // Hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later.');
          Notiflix.Report.failure(
            'Something went wrong',
            "", // Corrected to use response.data.message
            'try again'
        );
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // Hide message after 5 seconds
        }
      );
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <h1 style={{ color: "white", position: "relative", marginBottom:"50px", fontSize:"50px"}}>
            <span style={{ borderBottom: "4px solid purple", fontWeight: "bold", marginRight: "5px" }}>Contact</span>
            <strong className='purple' style={{ borderBottom: "4px solid #ffff", fontWeight: "bold" }}>Me</strong>
          </h1>
        <Row className="intro-section">
          <Col md={4} className="form-col">
            <Card className="form-card">
              <Card.Body>
                <h2 className="form-title">Contact Me</h2>
                <form onSubmit={sendEmail} id="contact-form">
                  <div className="form-group">
                    <label className="form-label">
                      <RiMailFill className="form-icon" /> Name
                    </label>
                    <input type="text" className="form-control" name="user_name" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      <RiMailFill className="form-icon" /> Email address
                    </label>
                    <input type="email" className="form-control" name="user_email" placeholder="Your Email" aria-describedby="emailHelp" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      <RiMessage3Fill className="form-icon" /> Message
                    </label>
                    <textarea className="form-control" name="message" rows="5" placeholder="Your Message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                  {stateMessage && <p>{stateMessage}</p>}
                </form>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={8} className="home-about-description">
            <div className="home-about-description-main">
              <Tilt className="myAvatar">
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
              <div className="intro-content">
                <h1 className="intro-heading">
                  LET ME <span className="purple">INTRODUCE</span> MYSELF
                </h1>
                <div className="intro-body">
                  <p>
                    <span className="highlight">I fell for coding,</span> and it's been a magical journey since. 🌟
                  </p>
                  <p>
                    Fluent in <span className="purple">Java</span> and <span className="purple">JavaScript</span>,<br /> I craft code symphonies that dance across screens. 💻
                  </p>
                  <p>
                    Passionate about <span className="purple">Web Technologies</span> and <span className="purple">Full Stack</span> exploration. 🔗
                  </p>
                  <p>
                    With <span className="purple">Node.js</span> and <span className="purple">Modern JS Libraries</span> like <span className="purple">React.js</span> and <span className="purple">Spring Boot</span>,<br /> I bring ideas to life. 🚀
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dmethi9871"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/infinity_deepu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/deepanshu011/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/1.1_infinity/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
