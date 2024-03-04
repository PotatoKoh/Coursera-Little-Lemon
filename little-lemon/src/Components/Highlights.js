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

const food = {
  foodItems: [
    {
      image: GreekSalad,
      foodTitle: "Greek Salad",
      foodPrice: "$9.99",
      foodDescription:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      image: LemonDessert,
      foodTitle: "Lemon Dessert",
      foodPrice: "$6.99",
      foodDescription:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
    {
      image: bred,
      foodTitle: "premium bred",
      foodPrice: "$15.99",
      foodDescription:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
  ],
};
const Highlights = () => {
  return (
    <div className="section">
      <Navbar>
        <Container>
          <h1 style={{ color: "white" }}>Specials</h1>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="primary">Order Online</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row className="mainSection" xs={1} md={5}>
        {food.foodItems.map((item, index) => (
          <Col>
            <Specials
              foodPrice={item.foodPrice}
              image={item.image}
              foodTitle={item.foodTitle}
              foodDescription={item.foodDescription}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Highlights;
