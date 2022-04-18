import React from 'react';
import { Button } from 'react-bootstrap';

const Sociallogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center' >

                <p className='mt-2 px-2 text-bold'>Or</p>

            </div>
            <div className='d-flex justify-content-center mb-5'>
                <Button className='mb-5' variant="outline-primary" type="submit">
                    <img className='text-center px-1' src="./images/social.png" alt="" />
                    Google Sign in
                </Button>
            </div>
        </div>
    );
};

export default Sociallogin;