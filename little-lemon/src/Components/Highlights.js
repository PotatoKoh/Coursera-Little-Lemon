import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GreekSalad from "../../src/Images/greek salad.jpg";
import LemonDessert from "../../src/Images/lemon dessert.jpg";
import bred from "../../src/Images/bred.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import "./Components.css";
import Navbar from "react-bootstrap/Navbar";
import Specials from "./Specials";
import { CardGroup } from "react-bootstrap";

const food ={
    foodItems : [{
        image: GreekSalad,
        foodTitle: "Greek Salad",
        foodPrice: "$9.99",
        foodDescription:"Word describing greek salad very good ya"
    },
    {
        image: LemonDessert,
        foodTitle: "Lemon Dessert",
        foodPrice: "$6.99",
        foodDescription:"Word describing Lemon Dessert very good ya"
    }
    ,
    {
        image: bred,
        foodTitle: "premium bred",
        foodPrice: "$15.99",
        foodDescription:"Word describing bred very good ya"
    }
]
}
const Highlights = () => {
  return (
    <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <h1>Specials</h1>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Button variant="primary">Order Online</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Row className="mainSection" xs= {1} md={5}>
        {food.foodItems.map((item,index)=>
        <Col>
        <Specials 
        foodPrice = {item.foodPrice}
        image={item.image} 
        foodTitle={item.foodTitle}
         foodDescription ={item.foodDescription}/>
        </Col>
        )}
    </Row>
    </>
  );
};
export default Highlights;
