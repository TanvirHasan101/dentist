import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (

        <div id='services' className='my-5'>
            <h2 style={{ fontSize: "50px", color: "blue" }} className='text-center m-5'>Services</h2>

            <Row xs={1} md={3} className='container gx-5 mt-5 mx-auto'>
                {services.map(service => <Service key={service._id} service={service}></Service>)}
            </Row>

        </div>

    );
};

export default Services;