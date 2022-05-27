import React from "react";

const CreateAccount = (props) => {
  return (
    <section className={`overlay ${props.active ? "active" : ""}`}>
      <div className="modal">
        <h2>Create an account</h2>
        <input type="text" placeholder="Name" />
        <input type="mail" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={props.click}>Sign up</button>
      </div>
    </section>
  );
};

export default CreateAccount;
