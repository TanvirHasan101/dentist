import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div>

            <h2 style={{ fontSize: "50px", color: "blue" }} className='text-center m-5'>Login</h2>

            <Form className='container mx-auto my-5 w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "blue" }}  >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ color: "blue" }}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;