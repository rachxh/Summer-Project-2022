import React from "react";

const Contact = () => {
  return (
  <div>
    <form>
      <div className="mb-3">
        <label htmlFor="firstName" className="col-form-label">First Name:</label>
      <input  className="form-control" type="text" placeholder="First name" name="firstName"/>
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="col-form-label">Last Name:</label>
      <input  className="form-control" type="text"  name="lastName"/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="col-form-label">Email:</label>
      <input  className="form-control" type="email"  name="email"/>
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="col-form-label">Phone:</label>
      <input  className="form-control" type="phone"  name="phone"/>
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="col-form-label">Message:</label>
      <input  className="form-control" type="textarea"  name="message"/>
      </div>
      <div className="mb-3">
       <button type="button" className="btn btn-success">Send Message</button>
      </div>

    </form>
  </div>
  )
  ;
};

export default Contact;
