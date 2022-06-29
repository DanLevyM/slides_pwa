import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

const Private = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser, "currentUser");

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <h1>private!!@!@</h1>
    </div>
  );
};

export default Private;
