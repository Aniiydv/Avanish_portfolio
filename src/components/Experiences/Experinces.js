import React from 'react';
import NavBar from '../Navbar';
import Particle from '../Particle';
import { Container, Row, Col } from 'react-bootstrap';

import ExperinceCard from './ExperinceCard';
import walia from '../../Assets/Walia.png'
import _4Cplus from '../../Assets/4Cplus.jpg'


function Experinces() {
  return (
    <>
      <NavBar />
      <Particle />
      <Container fluid className='project-section'>
        <Container>
          <h1 style={{ color: "white", position: "relative", marginBottom:"50px", fontSize:"50px"}}>
            <span style={{ borderBottom: "4px solid purple", fontWeight: "bold", marginRight: "5px" }}>Work</span>
            <strong className='purple' style={{ borderBottom: "4px solid #ffff", fontWeight: "bold" }}>History</strong>
          </h1>

          <Row style={{ justifyContent: "center", gap: "20px", marginBottom: "40px" }}>
            
            <Col md={4} className='project-heading' style={{ marginBottom: "20px" }}>
              <ExperinceCard
                description={"Since December 2022, I've worked at 4C Plus as an .Net Developer, helping to develop creative software solutions for news and media applications. Through my work, I've contributed to the company's efficiency and productivity by leveraging cutting-edge technology and implementing robust software solutions. Working together with cross-functional teams, I've assisted the development of dynamic and user-friendly applications, with the goal of streamlining procedures and providing an amazing user experience. My efforts have resulted in a significant increase in efficiency, with production up 130%. I am still devoted to fostering continuous improvement and innovation at 4C Plus, pushing the boundaries and achieving excellence in software development."}

                ImgPath={_4Cplus}
                isBlog={false}
                title={`4CPlus`}
                time={"December 2022 - February 2025"}
                role={".Net Developer"}
                companyLocation={"Ghazibad"}
                workMode={"Full-time"}
                technologyUsed={"C#, ASP.NET, SQL, Oracle, HTML, CSS, JavaScript, and Bootstrap"}
                milestones={"Optimized, Improved, Enhanced by 40%"}
              />
            </Col>
          </Row>
        </Container>
      </Container>

    </>
  );
}

export default Experinces;
