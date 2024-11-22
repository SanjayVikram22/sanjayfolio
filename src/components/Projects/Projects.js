import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={emotion}
              isBlog={false}
              title="Face Attendance System using DeepFace"
              description="The system uses pre-stored faces for recognition and employs DeepFacefor accurate facial matching. When a face is detected, it's compared with thestored faces using DeepFace. Upon successful recognition, attendance isautomatically updated on the website, and the data is stored in Firebase forfuture reference"
              ghLink="https://github.com/SanjayVikram22/Face-Verification"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={emotion}
              isBlog={false}
              title="Medical image Analysis and decision Support using LLM"
              description="Developed a website for medical imaging pipeline that automatessegmentation, anomaly detection, and report generation, improving diagnosticaccuracy. Utilized a Visual Large Language Model (VLM) for high performance infew-shot learning, generating detailed reports to enhance clinical workflows."
              ghLink="https://github.com/SanjayVikram22/Med-VLM"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={emotion}
              isBlog={false}
              title="Vital Fit : Your Health Companion"
              description="Vital Fit is an IoT-based web project that calculates a person's BMI(Body Mass Index) by measuring their height and weight. It providespersonalized diet recommendations to help users maintain a healthierweight."
              ghLink="https://github.com/SanjayVikram22/vital"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
