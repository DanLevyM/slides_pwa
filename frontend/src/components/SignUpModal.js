import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const SignUpModal = () => {
  const {modalState, toggleModals} = useContext(UserContext);

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
                  <form action="" className="sign-up-form">

                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">Email address</label>
                      <input type="email" name="email" required id="signUpEmail" className="form-control"/>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="signUpPwd" className="form-label">Password</label>
                      <input type="password" name="pwd" required id="signUpPwd" className="form-control"
                             autoComplete="off"/>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="repeatPwd" className="form-label">Repeat password</label>
                      <input type="password" name="repeatPwd" required id="repeatPwd" className="form-control"
                             autoComplete="off"/>
                      <p className="text-danger mt-1">Validation</p>
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
