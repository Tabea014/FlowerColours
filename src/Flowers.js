import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import LoofandTimmy from "./Images/LoofandTimmy.gif";

import "./flowers.css";

export default function Flowers(){
    return (
<div className="Intro">
    <br/>
<h1>Hey to Flower Colours</h1>
<img src={LoofandTimmy } width="200" heigth="200" className="LoofandTimmy" />

<Container>
  <Row>
<Col sm="col-md-6 offset-md-4">
<Card style={{ width: '18rem' }}>
  <ListGroup variant="flush" className="row justify-content-center ">
    <ListGroup.Item action variant="warning">Jump into the colourful world of flowers!</ListGroup.Item>
    <ListGroup.Item action variant="light">Explore colour schemes inspired by the most beautiful flowers.</ListGroup.Item>
    <ListGroup.Item action variant="warning">Have a look for the flower that inspires you.</ListGroup.Item>
    <ListGroup.Item action variant="light">Pick up the code from the Flower Colours scheme.</ListGroup.Item>
    <ListGroup.Item action variant="warning">Get started with your project.</ListGroup.Item>
  </ListGroup>
</Card>
</Col>

</Row>
</Container>

<hr />

<h2> Flowers </h2>

</div>
    );
}