import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Sociallogin from '../SocialLogin/Sociallogin';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Register = () => {
    const nameRef = useRef('')
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let errorElement = '';

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (loading) {
        return <Loading></Loading>;
    }
    if (user) {

        navigate(from, { replace: true });

    }

    const handelRegister = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
    }



    return (


        <div>

            <h2 style={{ fontSize: "50px", color: "blue" }} className='text-center m-5'>Sign Up</h2>


            <div className='container mx-auto my-5 w-50'>

                <Form onSubmit={handelRegister}>
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
                    <p>Already have an account?<Link className='text-decoration-none' to={'/login'}> Please Login</Link> </p>
                    {errorElement}
                    <Button className='w-50 p-2 my-3 d-block mx-auto' variant="primary" type="submit">
                        Sign Up
                    </Button>

                </Form>
                <Sociallogin> </Sociallogin>

            </div>

        </div>
    );
};

export default Register;