import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { ImPointRight } from 'react-icons/im';

function ExperinceCard(props) {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`project-card-view ${isFlipped ? 'is-flipped' : ''}`} onMouseEnter={handleCardFlip} onMouseLeave={handleCardFlip}>
      {props.purple}
      <div className="card-front">
        {!isFlipped && (
          <Card.Body>
            <Card.Title><strong className='purple'>{props.title}</strong></Card.Title>
            <Card.Text style={{ textAlign: "justify", fontSize: "14px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              {props.description}
            </Card.Text>

          </Card.Body>
        )}
      </div>
      <div className="card-back">
        {isFlipped &&
          <Card.Body>
            <Card.Img variant='top' src={props.ImgPath} alt='card-img' width='20px' height='200px' />
            <Card.Text style={{ textAlign: "Center", fontSize: "14px" }}>
            <Card.Title><strong className='purple'>{props.title}</strong></Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                <ul>
                  <li className="about-activity"><ImPointRight /> <strong className='purple' style={{ fontWeight: "bold", marginRight: "5px" }}>Time Period:</strong> {props.time}</li>
                  <li className="about-activity"><ImPointRight /> <strong className='purple'>Role:</strong> {props.role}</li>
                  <li className="about-activity"><ImPointRight /> <strong className='purple'>Company Location:</strong> {props.companyLocation}</li>
                  <li className="about-activity"><ImPointRight /> <strong className='purple'>Work Mode:</strong> {props.workMode}</li>
                  <li className="about-activity"><ImPointRight /> <strong className='purple'>Technology Used:</strong> {props.technologyUsed}</li>
                  <li className="about-activity"><ImPointRight /> <strong className='purple'>Milestones:</strong> {props.milestones}</li>
                </ul>
              </Card.Text>
            </Card.Text>
          </Card.Body>
        } </div>
    </div>
  );
}

export default ExperinceCard;
