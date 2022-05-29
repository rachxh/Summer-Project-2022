import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";

const AboutUs = () => {
  return (
    <>
  <Header />
    <div>
        <h2>Team Slogan</h2>
    <div>
        <p>Meet our team</p>
        <img src="https://cdn.pixabay.com/photo/2021/05/23/00/21/woman-6274879_1280.png" alt="profile" />
        <p>personal introduction</p>
        <p>personal introduction</p>
        <img  src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302__340.jpg" alt="profile"/>  
    </div>
    </div>
    <Contact />
    <Footer />
    </>
  ) 
};

export default AboutUs;
