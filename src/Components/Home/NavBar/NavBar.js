import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <Container fluid style={{backgroundColor: '#FBD062'}}>
            <Container>
                <Navbar expand="lg" className="fixed">
                    <Navbar.Brand><Link to="/home"><img src="https://iili.io/2ZBmHQ.png" style={{ width: 150 }} className="d-inline-block align-top" alt="" /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/" className="navLink font-weight-bold">Home</Link>
                            <Link to="/" className=" navLink">Our Portfolio</Link>
                            <Link to="/" className="navLink">Our Team</Link>
                            <Link to="/" className="navLink">Contact Us</Link>
                            <Link to="/" className="navLink btn btn-dark text-white pr-4 pl-4">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Container>
    );
};

export default NavBar;