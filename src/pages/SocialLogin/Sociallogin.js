import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Sociallogin = () => {
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let errorElement = '';

    if (user) {

        navigate(from, { replace: true });

    }

    // error msg

    if (error) {

        errorElement = <p className='text-danger'>Error: {error?.message}</p>

    }

    if (loading) {
        return <p>Loading...</p>;
    }


    return (
        <div>
            {errorElement}

            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>

            <div className='d-flex justify-content-center mb-5'>
                <Button
                    onClick={() => { signInWithGoogle() }}
                    className='mb-5' variant="outline-primary">
                    <img className='text-center px-1' src="./images/social.png" alt="" />
                    Google Sign in
                </Button>
            </div>
        </div>
    );
};

export default Sociallogin;