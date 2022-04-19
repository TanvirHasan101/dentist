import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import Sociallogin from '../SocialLogin/Sociallogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your Email Address')
        }

    }

    // loading navigate and error handel 

    if (loading || sending) {
        return <Loading></Loading>;
    }
    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {

        errorElement = <p className='text-danger'>Error: {error?.message}</p>

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

                <p>New to 24-Dentist?<Link className='text-decoration-none' to={'/register'}> Please Register</Link> </p>
                <p>Forget Password? <Button className='text-decoration-none btn btn-link' onClick={resetPassword} variant="link">Reset Password</Button></p>
                {errorElement}

                <Button className='w-50 p-2 my-3 d-block mx-auto' variant="primary" type="submit">
                    Login
                </Button>

                <Sociallogin></Sociallogin>
            </Form>
            <ToastContainer />



        </div>
    );
};

export default Login;