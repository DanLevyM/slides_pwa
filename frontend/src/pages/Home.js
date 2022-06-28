import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Home = () => {
  const {currentUser} = useContext(UserContext);

  return (
    <div className="container p-5">
      <h1 className="display-3 text-light">
        {currentUser ? 'Welcome bud' : 'Hi, sign up / sign in'}</h1>

    </div>

  );
};

export default Home;
