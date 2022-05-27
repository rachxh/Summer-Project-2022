import React from "react";

const Contact = () => {
  return (
  <div>
    <form>
      <input type="text" placeholder="First name" name="firstName"/>
      <input type="text" placeholder="Last name" name="lastName"/>
      <input type="email" placeholder="Email address" name="email"/>
      <input type="textarea" placeholder="Your message" name="message" />
      <input type="submit" name="send" id="send" value="Send Message" />
    </form>
  </div>
  )
  ;
};

export default Contact;
