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

<Col sm={4}>
<Card style={{ width: '18rem' }} className="Card">
  <Card.Img variant="top" src={Roses} alt="Roses" className="Roses" />
  <Card.Body>
    <Button variant="primary" className="Button">Bath of Roses</Button>
  </Card.Body>
</Card>
</Col>

<Col sm={4}>
<Card style={{ width: '18rem' }} className="Card">
  <Card.Img variant="top" src={Sunflower} alt="Sunflower" className="Sunflower" />
  <Card.Body>
    <Button variant="primary" className="Button">Sunny Sunflower</Button>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>

    );
}

//use cards for the flowers and than link to flowerscheme