import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function Film(props) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={props.kepneve} />
      <Card.Body>
        <Card.Title>{props.nev}</Card.Title>
        <Card.Text>Kiadási év: {props.kiadasEve}</Card.Text>
        <Card.Text>A film értékelése: {props.ertekeles}</Card.Text>
        <NavLink to={`/Film/${props.id}`} style={{ textDecoration: 'none' }}>
          <Button variant="primary">Megnézem</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
}

export default Film;