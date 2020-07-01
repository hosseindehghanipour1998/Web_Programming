import React from "react";
import './style.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';


const SignIn = ({onClickHandler}) => {
  return (
    <div  className="SignInAlignment">
    
      <MDBContainer >
        <MDBRow>
          <MDBCol md="12">
            <form>
              <p className="h4 text-center mb-4 white-text">Sign in</p>
              <label htmlFor="defaultFormLoginEmailEx" className="white-text">
                Your email
              </label>
              <input type="email" id="defaultFormLoginEmailEx" className="form-control inputStyle" />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="white-text">
                Your password
              </label>
              <input type="password" id="defaultFormLoginPasswordEx" className="form-control inputStyle" />
              <div className="text-center mt-4">
                <MDBBtn  className="buttonStyle" type="submit" onClick={onClickHandler} >Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  </div>
  );
};

export default SignIn;