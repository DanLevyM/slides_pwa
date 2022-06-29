import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.js";
import Navbar from "./components/Navbar";
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal";
import Private from "./pages/Private/Private";
import { UserContext } from "./context/UserContext";

function App() {
  const { currentUser } = useContext(UserContext);

  const OnlyWhen = ({ condition, otherwise, children }) => {
    return condition ? children : <Navigate to={otherwise} />;
  };

  return (
    <>
      <Navbar />
      <SignUpModal />
      <SignInModal />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/private"
          exact
          element={
            <OnlyWhen condition={currentUser} otherwise="/">
              <Private />
            </OnlyWhen>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
