import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
            Könyvek
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/ujFilm">ujFilm</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
