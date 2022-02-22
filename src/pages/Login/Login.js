import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="login">
      <div className="wrapper">
        <h1>SIGN IN</h1>
        <form>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </button>
          {error && <span className="error">somthing went wrong...</span>}

          <a>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
