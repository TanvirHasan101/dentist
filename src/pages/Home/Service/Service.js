import React from 'react';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, img, price, about } = service
    return (
        <Col >
            <CardGroup style={{ height: "600px" }}>
                <Card border="info" className='border-bottom-0'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-primary' >{name}</Card.Title>
                        <b className='text-danger'>price: </b> <b className='text-success'> ${price}</b>
                        <Card.Text className='mt-3' >
                            {about}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Check In</Button>{' '}
                </Card>
            </CardGroup>
        </Col>

    );
};

export default Service;