import React from "react";

const SignupForm = () => {
  return (
    <>
      <form className="formStructSign" action="Homepage.js" method="get">
        <div className="parameters">
          <label className="inp" for="email">
            Email:
          </label>
          <input className="inpBox" type="text" id="email" name="email" />
          <br />
          <br />
        </div>
        <div className="parameters">
          <label className="inp" for="uname">
            Username:
          </label>
          <input className="inpBox" type="text" id="uname" name="uname" />
          <br />
          <br />
        </div>
        <div className="parameters">
          <label className="inp" for="password">
            Password:
          </label>
          <input className="inpBox" type="text" id="password" name="password" />
          <br />
          <br />
        </div>
        <div>
          <label for="dob">Date of Birth:</label>
          <input className="dobStyle" type="date" id="dob" name="dob" />
          <br />
          <br />
        </div>
        <input className="SignUp" type="submit" value="Sign Up" />
      </form>
      <a className="linkSignUp" href="LogIn">
        Already registered? Log In!
      </a>
    </>
  );
};

export default SignupForm;
