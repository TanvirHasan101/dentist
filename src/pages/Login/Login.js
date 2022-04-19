import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Sociallogin from '../SocialLogin/Sociallogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();
    let errorElement = '';
    let from = location.state?.from?.pathname || "/";


    // sign in with email & password

    const [

        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {

        errorElement = <p className='text-danger'>Error: {error?.message}</p>

    }
    const handelSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)


    }


    // forget password 
    const [
        sendPasswordResetEmail,
        sending
    ] = useSendPasswordResetEmail(auth);

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }


    return (
        <div>

            <h2 style={{ fontSize: "50px", color: "blue" }} className='text-center m-5'>Login</h2>

            <Form onSubmit={handelSubmit} className='container mx-auto my-5 w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "blue" }}  >Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ color: "blue" }}>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>


                {/* Route to register page & forget password  */}

                <p>New to 24-Dentist? Please <Link className='text-decoration-none' to={'/register'}>Register</Link> </p>
                <p>Forget Password? <Link to={'/login'} className='text-decoration-none' onClick={resetPassword} variant="link">Reset Password</Link></p>
                {errorElement}

                <Button className='w-50 p-2 my-3 d-block mx-auto' variant="primary" type="submit">
                    Login
                </Button>

                <Sociallogin></Sociallogin>
            </Form>



        </div>
    );
};

export default Login;