import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import shef1 from "../../src/Images/Mario and Adrian A.jpg";
import shef2 from "../../src/Images/Mario and Adrian b.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import "./Components.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const About = () => {
  return (
    <Row className="mainSection" xs={2} md={4}>
      <Col>
        <Card className="cards">
          <Card.Body>
            <Card.Title>Little Lemon</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Chicago</Card.Subtitle>
            <Card.Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col className ="imageHolder">
        <Card.Img src={shef2} className="mainImage" id ="mainImage2"/>
        <Card.Img src={shef1} className="mainImage" id ="mainImage1"/>
      </Col>
    </Row>
  );
};
export default About;
