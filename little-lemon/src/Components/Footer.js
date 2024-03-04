import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import littleLemonLogo from "../../src/Images/LittleLemonWhiteLogo.png";
import Card from "react-bootstrap/Card";
import React from "react";
import "./Components.css";
import {Nav,Navbar, Stack} from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <Row className="mainSection" xs={1} md={6}>
        <Col>
          <Card.Img src={littleLemonLogo} />
        </Col>
        <Col>
          <Card className="cards">
            <Card.Title>Doormat 
                Navigation</Card.Title>
            <Card.Body>
            <Navbar expand = "lg"> 
            <Stack>
                <Nav.Link href ="#home">Home</Nav.Link>
                <Nav.Link href ="#About">About</Nav.Link>
                <Nav.Link href ="#Menu">Menu</Nav.Link>
                <Nav.Link href ="#Reservations">Reservations</Nav.Link>
                <Nav.Link href ="#Order Online">Order Online</Nav.Link>
                <Nav.Link href ="#Login">Login</Nav.Link>
            </Stack>
        </Navbar>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className="cards">
            <Card.Title>Contact Us</Card.Title>
            <Card.Body>
            <Stack>
                <Card.Text>Some fake location </Card.Text>
                <Card.Text>1800 000 000 </Card.Text>
                <Card.Text>littlelemon@gmail.com </Card.Text>
            </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className="cards">
            <Card.Title>Social Media Links</Card.Title>
            <Card.Body>
            <Navbar expand = "lg" > 
            <Stack>
                <Nav.Link href ="#Instagram">Instagram</Nav.Link>
                <Nav.Link href ="#Facebook">Facebook</Nav.Link>
            </Stack>
        </Navbar>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Footer;
