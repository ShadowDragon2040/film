import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const UjFilm = ({ onCardSubmit }) => {
  const [formData, setFormData] = useState({
    nev: '',
    kiadasEve: '',
    ertekeles: '',
    kepneve: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7017/Film', formData);
      console.log("Post request successful:", response.data);
      if (onCardSubmit) {
        onCardSubmit(response.data);
      }
    } catch (error) {
      console.error("Post request failed:", error);
    }
  };

  return (
    <div >
    <h1 style={{textAlign: 'center'}}>Add new card</h1>
    <Card style={{ width: '50%', margin: 'auto',marginTop: '50px' }}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="nev"
              value={formData.nev}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formKiadasEve">
            <Form.Label>Kiadási év</Form.Label>
            <Form.Control
              type="number"
              name="kiadasEve"
              value={formData.kiadasEve}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formErtekeles">
            <Form.Label>Értékelés</Form.Label>
            <Form.Control
              type="number"
              name="ertekeles"
              value={formData.ertekeles}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formKepneve">
            <Form.Label>Képneve</Form.Label>
            <Form.Control
              type="text"
              name="kepneve"
              value={formData.kepneve}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </div>
  );
};

export default UjFilm;
