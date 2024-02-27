import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import "./Components.css";

const FoodReviews = (props) => {
  return (
    <>
     <Card className="testimonials">
     <Card.Title className ="cardTitle">{props.name}</Card.Title>
        <Card.Body>
            <Row>
                <Col>
                <Card.Img src={props.image}/>
                </Col>
                <Col>
                <Card.Text>
                    {props.foodRating+"/5"}
                </Card.Text>
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
        {props.foodDescription}
        </Card.Footer>
      </Card>
    </>
  );
};
export default FoodReviews;
