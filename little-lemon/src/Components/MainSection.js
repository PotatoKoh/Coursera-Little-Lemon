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
    <Row className="mainSection" xs= {1} md={4}>
      <Col>
        <Card className="description">
          <Card.Body>
            <Card.Title>Little Lemon</Card.Title>
            <Card.Subtitle className ="mb-2 text-muted">Chicago</Card.Subtitle>
            <Card.Text>
            Little Lemon is a family owned restaurant based in Chicago. Some more words to describe this place 
            </Card.Text>
            <Button variant="primary">Order Online</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
      <Card.Img src={RestaurantFood} className ="mainImage"/>
      </Col>
    </Row>
  );
};
export default MainSection;
