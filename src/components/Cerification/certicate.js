import React from 'react';
import { Container } from 'react-bootstrap';
import { DiReact, DiJavascript1, DiNodejs, DiDatabase } from 'react-icons/di';
import { FaSchool, FaJava, FaCogs } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Ensure you import the CSS for the timeline
import Particle from '../Particle';

function Certificate() {
  return (
    <Container fluid className='project-section'>
        
            <span style={{ color:"white", fontWeight: "bold",  marginRight: "5px",  textTransform:"uppercase"}}>Explore my Credentials below</span>
            <br/>
            <h1 style={{ color: "white", position: "relative" }}>
            <strong className='purple' style={{ borderBottom: "4px solid #ffff", fontWeight: "bold" ,fontSize:"60px"}}>Certifications.</strong>
          </h1>
         <Particle />
        <br />
        <br />
        <br />
        <br />
      <VerticalTimeline>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" "
          iconStyle={{ background: 'rgb(97, 218, 251)', color: '#fff' }} // Light Blue
          icon={<DiReact />}
        >
          <h3 className="vertical-timeline-element-title">ReactJS</h3>
          <h4 className="vertical-timeline-element-subtitle">Infosys</h4>
          <p>
            - Mastered ReactJS for building interactive UIs<br />
            - Implemented state management and routing in React applications<br />
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" "
          iconStyle={{ background: 'rgb(244, 67, 54)', color: '#fff' }} // Red
          icon={<FaJava />}
        >
          <h3 className="vertical-timeline-element-title">OOPS Java</h3>
          <h4 className="vertical-timeline-element-subtitle">Coursera</h4>
          <p>
            - Developed object-oriented solutions using Java<br />
            - Gained experience in Java's core libraries and tools<br />
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" "
          iconStyle={{ background: 'rgb(255, 193, 7)', color: '#fff' }} // Yellow
          icon={<DiJavascript1 />}
        >
          <h3 className="vertical-timeline-element-title">JavaScript</h3>
          <h4 className="vertical-timeline-element-subtitle">Coursera</h4>
          <p>
            - Learned JavaScript fundamentals and ES6 features<br />
            - Applied JavaScript in web development and dynamic content creation<br />
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" "
          iconStyle={{ background: 'rgb(40, 167, 69)', color: '#fff' }} // Green
          icon={<DiNodejs />}
        >
          <h3 className="vertical-timeline-element-title">NodeJS with React & DB</h3>
          <h4 className="vertical-timeline-element-subtitle">Coursera</h4>
          <p>
            - Built full-stack applications using NodeJS and React<br />
            - Integrated databases with backend services for dynamic data handling<br />
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" "
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} // Blue
          icon={<FaCogs />}
        >
          <h3 className="vertical-timeline-element-title">Web Development</h3>
          <h4 className="vertical-timeline-element-subtitle">Coursera</h4>
          <p>
            - Gained comprehensive knowledge of web development practices<br />
            - Implemented responsive design and web optimization techniques<br />
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=" "
          iconStyle={{ background: 'rgb(3, 155, 229)', color: '#fff' }} // Light Blue
          icon={<DiDatabase />}
        >
          <h3 className="vertical-timeline-element-title">Interfacing with Arduino</h3>
          <h4 className="vertical-timeline-element-subtitle">Coursera</h4>
          <p>
            - Developed projects interfacing with Arduino hardware<br />
            - Applied sensors and actuators for interactive electronic projects<br />
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} // Green
          icon={<FaSchool />}
        />
        
      </VerticalTimeline>
    </Container>
  );
}

export default Certificate;
