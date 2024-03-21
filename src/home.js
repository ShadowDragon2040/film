import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Film from './Film';

function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7017/Film')
      .then(response => {
        setFilms(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='container'>
      <h1>Filmek</h1>
      <div className='row'>
        {films.map(film => (
          <Film key={film.id} {...film} />
        ))}
      </div>
    </div>
  );
}

export default Home;