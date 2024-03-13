
import {Card, Nav,Navbar, Row,Col} from 'react-bootstrap'
import { useState,useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const SubmitPage = (props)=>{
    return(
        <Card className="cards">
          <Card.Body>
            <Card.Title className ="cardTitle">Little Lemon</Card.Title>
            <Card.Subtitle className ="mb-2 text-muted">Chicago</Card.Subtitle>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
          </Card.Body>
        </Card>
)}
export default SubmitPage;