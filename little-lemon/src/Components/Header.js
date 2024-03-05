import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Logo from '../../src/Images/LittleLemonHorizontalWhiteLogo.png';
import {Nav,Navbar} from 'react-bootstrap'
import { useState,useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = ()=>{
    return(
        <Navbar expand = "lg" className = "navbars" > 
            <Container>
                <Navbar.Brand href ="/"><Image src ={Logo}/></Navbar.Brand>
                <Nav.Link href ="/">Home</Nav.Link>
                <Nav.Link href ="#About">About</Nav.Link>
                <Nav.Link href ="#Menu">Menu</Nav.Link>
                <Link to ="/BookingForm">Maek Reservations</Link>
                <Nav.Link href ="/BookingForm">Reservations</Nav.Link>
                <Nav.Link href ="#Order Online">Order Online</Nav.Link>
                <Nav.Link href ="#Login">Login</Nav.Link>
            </Container>
        </Navbar>
)}
export default Header;