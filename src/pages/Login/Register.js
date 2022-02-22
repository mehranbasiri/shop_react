import React from "react";

const Register = () => {
  return (
    <div className="register">
      <div className="wrapper">
        <h1>Create Account</h1>
        <form>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="last name" />
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="Confirm password" />
          <span>
            By creating an account , I consent to the processing of my personel
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
