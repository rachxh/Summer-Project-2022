import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/68ba9b40-e7cb-11ec-b069-efe5ca590096";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="alert alert-success">
        <p>Thank you! We'll be in touch soon.</p>
      </div>
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
          // target="_blank"
        >
          <div className="form-group">
            <label htmlFor="yourName" className="col-form-label">
              First Name:
            </label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              id="firstName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="col-form-label">
              Last Name:
            </label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              id="lastName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="col-form-label">
              Email:
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="col-form-label">
              Phone:
            </label>
            <input
              className="form-control"
              type="phone"
              id="phone"
              name="phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="col-form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              rows="3"
              name="message"
              id="message"
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-success btn-contact"
              value="Send Message"
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
