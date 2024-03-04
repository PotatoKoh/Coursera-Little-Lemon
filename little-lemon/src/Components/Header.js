import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Logo from '../../src/Images/LittleLemonHorizontalWhiteLogo.png';
import {Nav,Navbar} from 'react-bootstrap'
import { useState,useEffect } from 'react';

const Header = ()=>{
    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
  
      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
      }
    };
    return(
        <Navbar expand = "lg" className = "navbars" sticky="top"> 
            <Container>
                <Navbar.Brand href ="#home"><Image src ={Logo}/></Navbar.Brand>
                <Nav.Link href ="#home">Home</Nav.Link>
                <Nav.Link href ="#About">About</Nav.Link>
                <Nav.Link href ="#Menu">Menu</Nav.Link>
                <Nav.Link href ="#Reservations">Reservations</Nav.Link>
                <Nav.Link href ="#Order Online">Order Online</Nav.Link>
                <Nav.Link href ="#Login">Login</Nav.Link>
            </Container>
        </Navbar>
)}
export default Header;