import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="custom-color my-border" variant="dark" sticky="top" >
            <Container>
                <Nav>
                    <Link className="text-decoration-none fw-bold text-white text-uppercase" to="/">Dev<span className="text-warning">@</span>Nepolion</Link>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to="/" className="nav-link " aria-current="page" >Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/explore" >Explore Me</Nav.Link>
                        <Nav.Link as={HashLink} to="/project" >Projects</Nav.Link>
                        <Nav.Link as={HashLink} to="/blogs" >Blogs</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact" >Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;