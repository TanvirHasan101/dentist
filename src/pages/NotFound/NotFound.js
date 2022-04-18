import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center p-5'>
            <h1 className='text-danger'>OOPS 404 NOT FOUND</h1>
            <img className='mt-4' src="/images/notfound.jpg" alt="" />
        </div>
    );
};

export default NotFound;