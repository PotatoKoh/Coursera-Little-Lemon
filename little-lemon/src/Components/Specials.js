import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import "./Components.css";

const Specials = (props) => {
  return (
    <>
     <Card className="cards">
        <Card.Img variant="top" src={props.image} className="specialsImages"/>
        <Card.Body>
          <Card.Title>{props.foodTitle}</Card.Title>
          <Card.Subtitle>{props.foodPrice}</Card.Subtitle>
          <Card.Text>
            {props.foodDescription}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">Order For Delivery</Button>
        </Card.Footer>
      </Card>
    </>
  );
};
export default Specials;
