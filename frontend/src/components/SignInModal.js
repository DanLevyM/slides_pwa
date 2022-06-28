import React, { useContext, useRef, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const SignInModal = () => {
  const {modalState, toggleModals, signIn} = useContext(UserContext);

  const navigate = useNavigate();

  const [validation, setValidation] = useState('');

  const inputs = useRef([]);
  const addInputs = el => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const formRef = useRef();
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const cred = await signIn(
        inputs.current[0].value,
        inputs.current[1].value,
      );
      // formRef.current.reset();
      closeModal();
      // console.log(cred);
      navigate('/private/private-home');

    } catch (e) {
      console.error(e);
      setValidation('Wopsy, email and/or password incorrect.');
    }
  };

  const closeModal = () => {
    setValidation('');
    toggleModals('close');
  };

  return (
    <>
      {modalState.signInModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            className="position-absolute w-100 h-100 bg-dark opacity-75"
            onClick={closeModal}>

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
                    ref={formRef}
                    action="" className="sign-in-form"
                    onSubmit={handleForm}>

                    <div className="mb-3">
                      <label htmlFor="signInEmail" className="form-label">Email address</label>
                      <input
                        ref={addInputs}
                        type="email"
                        name="email"
                        required id="signInEmail"
                        className="form-control"/>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="signInPwd" className="form-label">Password</label>
                      <input
                        ref={addInputs}
                        type="password"
                        name="pwd" required
                        id="signInPwd" className="form-control"
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

export default SignInModal;
