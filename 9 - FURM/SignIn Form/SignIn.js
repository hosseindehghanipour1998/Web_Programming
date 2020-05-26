import React from "react";
import './style.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const SignIn = () => {
  return (
    <div  class="SignInAlignment">
      <MDBContainer >
        <MDBRow>
          <MDBCol md="12">
            <form>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Your email
              </label>
              <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
              </label>
              <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  </div>
  );
};

export default SignIn;