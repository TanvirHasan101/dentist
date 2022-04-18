import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >
                        <Link to={'/'} className='text-decoration-none font-weight-bold'> <h2>24-Dentist</h2> </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='ms-auto '>
                            <Nav.Link >
                                <Link to={'/'} className='text-decoration-none'>  Home</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to={'/blogs'} className='text-decoration-none'>Blogs</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to={'/about'} className='text-decoration-none'>About</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={'/login'} className='text-decoration-none'>Login</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;