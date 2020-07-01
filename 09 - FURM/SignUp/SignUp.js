import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import './signUpstyle.css';
const SignUp = () => {
  return (
    <div  className="SignUpAlignment">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <form>
              <p className="h4 text-center mb-4 white-text">Sign up</p>
              <label htmlFor="defaultFormRegisterNameEx" className="white-text ">
                Your name
              </label>
              <input type="text" id="defaultFormRegisterNameEx" className="form-control inputStyle" />
              <br />
              <label htmlFor="defaultFormRegisterEmailEx" className="white-text">
                Your email
              </label>
              <input type="email" id="defaultFormRegisterEmailEx" className="form-control inputStyle" />
              <br />
              <label htmlFor="defaultFormRegisterConfirmEx" className="white-text">
                Confirm your email
              </label>
              <input type="email" id="defaultFormRegisterConfirmEx" className="form-control inputStyle" />
              <br />
              <label htmlFor="defaultFormRegisterPasswordEx" className="white-text">
                Your password
              </label>
              <input type="password" id="defaultFormRegisterPasswordEx" className="form-control inputStyle" />
              <div className="text-center mt-4">
                <MDBBtn color="unique" type="submit" className="buttonStyle">
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default SignUp;