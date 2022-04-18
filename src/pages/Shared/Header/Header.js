import React from 'react';
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
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
                            <Nav.Link as={Link} to={'/'} >Home

                            </Nav.Link>
                            <Nav.Link style={{ color: '#b8b6b6' }} href='/#services'>services

                            </Nav.Link>
                            <Nav.Link as={Link} to={'/blogs'} >
                                Blogs
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/about'} >
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/login'}>
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;