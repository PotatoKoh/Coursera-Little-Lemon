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
import FoodReviews from "./FoodReviews";

const reviews ={
    foodReviews : [{
        image: GreekSalad,
        name: "Bob",
        foodRating: "5",
        foodDescription:"mashiseoyo"
    },
    {
        image: LemonDessert,
        name: "Nic",
        foodRating: "4",
        foodDescription:"neomu neomu oishi"
    }
    ,
    {
        image: bred,
        name: "bredenjoyer123",
        foodRating: "5",
        foodDescription:"i like bred"
    }
]
}
const Testimonials = () => {
  return (
    <div className="section">
    <h1>Testimonials</h1>
    <Row className="mainSection" xs= {1} md={5}>
        {reviews.foodReviews.map((item,index)=>
        <Col>
        <FoodReviews
        name = {item.name}
        image={item.image} 
        foodRating={item.foodRating}
        foodDescription ={item.foodDescription}/>
        </Col>
        )}
    </Row>
    </div>
  );
};
export default Testimonials;
