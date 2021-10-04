import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
    }

    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>E-School</Navbar.Brand>
                    <Nav className="text-center">
                        <NavLink to="/home" className="me-3 text-decoration-none text-white" activeStyle={activeStyle}>Home</NavLink>
                        <NavLink to="/services" className="me-3 text-decoration-none text-white" activeStyle={activeStyle}>Services</NavLink>
                        <NavLink to="/about" className="me-3 text-decoration-none text-white" activeStyle={activeStyle}>About</NavLink>
                        <NavLink to="/contact" className="me-3 text-decoration-none text-white" activeStyle={activeStyle}>Contact Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;