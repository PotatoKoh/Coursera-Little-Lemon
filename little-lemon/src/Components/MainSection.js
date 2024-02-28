import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import RestaurantFood from "../../src/Images/restauranfood.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from 'react';
import './Components.css'

const MainSection = () => {
  return (
    <Row className="mainSection" xs= {1} md={6}>
      <Col>
        <Card className="cards">
          <Card.Body>
            <Card.Title className ="cardTitle">Little Lemon</Card.Title>
            <Card.Subtitle className ="mb-2 text-muted">Chicago</Card.Subtitle>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Order Online</Button>
            </Card.Footer>
        </Card>
      </Col>
      <Col>
      <Card.Img src={RestaurantFood} className ="mainSectionImage"/>
      </Col>
    </Row>
  );
};
export default MainSection;
