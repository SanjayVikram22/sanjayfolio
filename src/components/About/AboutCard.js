import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanjay Vikram CB </span>
            from <span className="purple"> Erode,TamilNadu, India.</span>
            <br />
            I am currently working as an intern at Profuture Tech Solutions Private Limited, Chennai.
            <br />
            I am also pursuing a B.Tech in Artificial Intelligence and Data Science at Erode Sengunthar Engineering College, Erode.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Too glam to give a damn....!"{" "}
          </p>
          <footer className="blockquote-footer">Sanjay vikram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
