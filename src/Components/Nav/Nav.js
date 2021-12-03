import React from 'react';
import { Navbar, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./Nav.css"


const Nav = () => {
    return (
        <div className=" sticky-top border-bottom ">

            {/* <Navbar collapseOnSelect expand="lg" className="custom-color" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Dev@Nepolion</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home" className="nav-link active" aria-current="page" >Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#projects" className="nav-link">Projects</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about" className="nav-link">About Me</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#blogs" className="nav-link">Blogs</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#contact" className="nav-link">Contact</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}



            <nav className="navbar navbar-expand-lg navbar-dark custom-color">
                <div className="container my-2 d-flex">
                    <Link className="navbar-brand" to="/">Dev@Nepolion</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" as={HashLink} to="/home#contact" >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Nav;