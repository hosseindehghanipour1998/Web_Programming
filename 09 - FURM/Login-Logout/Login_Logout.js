import React, {Component} from 'react';
import './Login_Logout_style.css'
import SingIn from '../SignIn/SignIn' ;
import SignUp from '../SignUp/SignUp';

class LILO extends Component{
  constructor(){
    super();
    this.state = {
      signup : false,
      login:true
    }

  }

  switchF(word){
    var signup,login;
    if(word == "signup"){signup = true;login = false;}
    else{login = true; signup = false;}
    return this.setState({login:login,signup:signup})
    
  }

  render(){ 
        let onButton = "#2D1457" ;
        let offButton =  "#FFF851";
        var self = this;
        return (
              <div>

                <div id="buttons" className = " ButtonFrame">
                  <p id="signupButton"  onClick={(e) => this.switchF("signup")} className="paragraph">Sign Up</p>
                  <p id="loginButton" onClick={(e) => this.switchF("login")} className="paragraph"> Sign In</p>
                </div>


                  <div className="formFrame row-sm-2">  
                        { self.state.signup?<SignUp/> : null}
                        {self.state.login? <SingIn /> : null}
                  </div>
             </div>
        )
  }    
}


export default LILO;




