import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const {toggleModals} = useContext(UserContext);

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/">
        Auth
      </Link>

      <div>
        <button className="btn btn-primary" onClick={() => {
          toggleModals('signUp');
        }}>Sign up
        </button>
        <button className="btn btn-primary m-1">Sign in</button>
        <button className="btn btn-danger m-1">Log out</button>
      </div>
    </nav>
  );
};

export default Navbar;
