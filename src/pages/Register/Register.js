import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sociallogin from '../Home/SocialLogin/Sociallogin';

const Register = () => {
    return (
        <div>

            <h2 style={{ fontSize: "50px", color: "blue" }} className='text-center m-5'>Sign Up</h2>

            <Form className='container mx-auto my-5 w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "blue" }}  >Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Full Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "blue" }}  >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ color: "blue" }}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <p>Already have an account? Please <Link className='text-decoration-none' to={'/login'}>Login</Link> </p>

                <Button className='w-50 p-2 mt-2 mx-auto' variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>

            <Sociallogin> </Sociallogin>
        </div>
    );
};

export default Register;