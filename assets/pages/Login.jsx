import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <section className={`overlay ${props.active ? "active" : ""}`}>
      <div className="modal">
        <h2>Login</h2>
        <input type="mail" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={props.click}>Login</button>
        <p>Don't have an account yet? <Link>Sign up here</Link></p>
      </div>
    </section>
  );
};

export default Login;
