import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Sociallogin from '../SocialLogin/Sociallogin';
import auth from '../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const nameRef = useRef('')
    const emailRef = useRef('');
    const passwordRef = useRef('');


    const handelRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
    }



    return (


        <div>

            <h2 style={{ fontSize: "50px", color: "blue" }} className='text-center m-5'>Sign Up</h2>

            <Form onSubmit={handelRegister} className='container mx-auto my-5 w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "blue" }}  >Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Full Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "blue" }}  >Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ color: "blue" }}>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <p>Already have an account? Please <Link className='text-decoration-none' to={'/login'}>Login</Link> </p>

                <Button className='w-50 p-2 my-2 mx-auto' variant="primary" type="submit">
                    Sign Up
                </Button>
                <Sociallogin> </Sociallogin>
            </Form>


        </div>
    );
};

export default Register;