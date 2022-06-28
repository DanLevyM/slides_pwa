import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';

const Navbar = () => {
  const {toggleModals} = useContext(UserContext);

  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (e) {
      alert('For some reasons we cannot deconnect, please check your internet connexion and retry.');
    }
  };

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/">
        Auth
      </Link>

      <div>
        <button
          className="btn btn-primary" onClick={() => {
          toggleModals('signUp');
        }}>Sign up
        </button>
        <button className="btn btn-primary m-1">Sign in</button>
        <button
          onClick={logOut}
          className="btn btn-danger m-1">Log out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
