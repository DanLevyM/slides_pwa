import React from "react";
import { googleClick } from "../utils/googleClick";
// import { auth } from "../firebase-config";
import googleIcon from "../assets/svg/googleIcon.svg";

const OAuth = () => {
  // const navigate = useNavigate();
  // const location = useLocation();

  return (
    <div className="socialLogin">
      <h3>Sign up with</h3>
      <button className="socialIconDiv" onClick={googleClick}>
        <img src={googleIcon} alt="google" />
      </button>
    </div>
  );
};

export default OAuth;
