import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const FORM_ENDPOINT = "";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2 className="text-2xl">Thank you!</h2>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div>
      <Header />
      <div className="form-container">
        <h2 className="contact">Contact us</h2>
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div className="form-group">
            <label htmlFor="yourName" className="col-form-label">
              First Name:
            </label>
            <input className="form-control" type="text" name="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="col-form-label">
              Last Name:
            </label>
            <input className="form-control" type="text" name="lastName" />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="col-form-label">
              Email:
            </label>
            <input className="form-control" type="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="col-form-label">
              Phone:
            </label>
            <input className="form-control" type="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="col-form-label">
              Message:
            </label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-success btn-contact">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
