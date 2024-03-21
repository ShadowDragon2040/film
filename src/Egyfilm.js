import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

function EgyFilm() {
    const { id } = useParams();
    const [Film, setFilm] = useState({});
    const [editedFilm, setEditedFilm] = useState({});

    useEffect(() => {
        axios.get(`https://localhost:7017/Film/${id}`)
            .then(response => {
                setFilm(response.data);
                setEditedFilm(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [id]);

    const handleDelete = () => {
        axios.delete(`https://localhost:7017/Film/${id}`)
            .then(response => {
                console.log('Book deleted successfully:', response.data);
                setFilm({});
            })
            .catch(error => {
                console.error('Error deleting book:', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedFilm({ ...editedFilm, [name]: value });
    };

    const handleSave = () => {
        axios.put(`https://localhost:7017/Film/${id}`, editedFilm)
            .then(response => {
                console.log('Book data updated successfully:', response.data);
                setFilm(editedFilm);
            })
            .catch(error => {
                console.error('Error updating book data:', error);
            });
    };

    return (
        <div style={{margin: '10px', display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"/"+Film.kepneve} />
                <Card.Body>
                    <Card.Title>
                        <input
                            type="text"
                            name="nev"
                            value={editedFilm.nev || ''}
                            onChange={handleInputChange}
                        />
                    </Card.Title>
                    <Card.Text>
                        Kiadási év: 
                        <input
                            type="text"
                            name="kiadasEve"
                            value={editedFilm.kiadasEve || ''}
                            onChange={handleInputChange}
                        />
                    </Card.Text>
                    <Card.Text>
                        A film értékelése: 
                        <input
                            type="text"
                            name="ertekeles"
                            value={editedFilm.ertekeles || ''}
                            onChange={handleInputChange}
                        />
                    </Card.Text>
                    <Button style={{margin: '10px'}} variant="primary" onClick={handleSave}>Save</Button>
                    <Button style={{margin: '10px'}} variant="primary" onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default EgyFilm;
