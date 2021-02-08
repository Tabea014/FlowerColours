import React from "react";
import Roses from "./Images/Roses.jpeg";
import Sunflower from "./Images/Sunflower.jpeg";
import 'bootstrap/dist/css/bootstrap.css';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import "./FlowerSection.css";

export default function FlowerSection(){
    return (
<Container>
  <Row>

<Col sm={6}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Roses} alt="Roses" className="Roses" />
  <Card.Body>
    <Card.Title>Bath of Roses</Card.Title>
    <Button variant="primary">Colour Choice</Button>
  </Card.Body>
</Card>
</Col>

<Col sm={6}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Sunflower} alt="Sunflower" className="Sunflower" />
  <Card.Body>
    <Card.Title>Sunny Sunflower</Card.Title>
    <Button variant="primary">Colour Choice</Button>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>

    );
}

//use cards for the flowers and than link to flowerscheme