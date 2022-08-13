import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

const NavMenu = () => {

    return (
        <>
            <Navbar className="background-color-blue fixed-top" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo-branca.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Project Pierre</Nav.Link>
                            <Nav.Link href="#library">Library</Nav.Link>
                            <Nav.Link href="#frame">Framework</Nav.Link>
                            <Nav.Link href="#us">Us</Nav.Link>
                            <Nav.Link href="#bib">Bibliography</Nav.Link>
                            <Nav.Link href="#ack">Acknowledgment</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Container>
            </Navbar>
        </>
    );
};

export default NavMenu;
