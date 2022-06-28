import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../context/UserContext';

const SignUpModal = () => {
  const {modalState, toggleModals, signUp} = useContext(UserContext);

  console.log(signUp);
  const [validation, setValidation] = useState('');

  const inputs = useRef([]);
  const addInputs = el => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    if ((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
      setValidation('6 characters min');
      return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation('Passwords do not match');
      return;
    }

    try {
      
    } catch (e) {

    }
  };

  return (
    <>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div className="position-absolute w-100 h-100 bg-dark opacity-75" onClick={() => toggleModals('close')}>

          </div>
          <div className=" top-50 start-50 translate-middle" style={{minWidth: '400px'}}>
            <div className="modal-dialog">
              <div className="modal-content">

                <div className="modal-header">
                  <h5 className="modal-title">Sign up</h5>
                  <button className="btn-close btn-close-white" onClick={() => toggleModals('close')}>x</button>
                </div>

                <div className="modal-body">
                  <form
                    action="" className="sign-up-form"
                    onSubmit={handleForm}>

                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">Email address</label>
                      <input
                        ref={addInputs}
                        type="email"
                        name="email"
                        required id="signUpEmail"
                        className="form-control"/>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="signUpPwd" className="form-label">Password</label>
                      <input
                        ref={addInputs}
                        type="password"
                        name="pwd" required
                        id="signUpPwd" className="form-control"
                        autoComplete="off"/>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="repeatPwd" className="form-label">Repeat password</label>
                      <input
                        ref={addInputs}
                        type="password"
                        name="repeatPwd"
                        required
                        id="repeatPwd"
                        className="form-control"
                        autoComplete="off"/>
                      <p className="text-danger mt-1">{validation}</p>
                    </div>


                    <button className="btn btn-primary">Submit</button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpModal;
