import React from 'react';
import propTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const CardItem = ({children, data}) => {
    return (
        <Card className="m-5" style={{ width: '18rem' }}>
            {children}
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.text}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};


CardItem.propTypes = {
    children: propTypes.object,
    data: propTypes.object.isRequired
};


export default CardItem;
