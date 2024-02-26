import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Logo from '../../src/Images/Logo.png';
import {Nav,Navbar} from 'react-bootstrap'


const Header = ()=>{
    return(
        <Navbar expand = "lg" className = "bg-body-tertiary"> 
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