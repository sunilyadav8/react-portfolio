import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.jpg";

const skills = [
  { name: "ReactJs", initialRating: 4 },
  { name: "React-Native", initialRating: 4 },
  { name: "JavaScript", initialRating: 4 },
  { name: "Redux", initialRating: 4 },
  { name: "Shopify/Reactjs", initialRating: 4 },
  { name: "Nodejs", initialRating: 3 },
  { name: "Koajs", initialRating: 3 },
  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
  { name: "Unit-Testing(Jest)", initialRating: 3 },
  { name: "TypeScript", initialRating: 4 },
  { name: "Graphql", initialRating: 4 },
  { name: "Apollo", initialRating: 4 },
  { name: "AntD | ReactStrap | Material UI", initialRating: 4 },
  { name: "Shopify Polaris", initialRating: 4 },
  { name: "Git", initialRating: 4 },
];

const tools = ["Visual Studio Code", "Git", "Chrome DevTools", "Npm (Node Package Manager)", "Atom", "Sublime Text", "Linux", "Heroku", "Postman"]
function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="image-style" />
          </Col>
        </Row>
        <Row>
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset </strong>
            </h1>
            {skills.map((skill, index) => (
              <Techstack
                name={skill.name}
                initialRating={skill.initialRating}
                key={index}
              />
            ))}
          </Col>
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            {tools.map((skill, index) => (
              <ul key={index} className="skill-name">
                <li>{skill}</li>
              </ul>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
