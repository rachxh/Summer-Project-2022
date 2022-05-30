import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";

const AboutUs = () => {
  return (
    <>
    <Header />
    <div> 
     <div className="row">
        <h1 className="title-about mt-5 mb-5">Here's our story</h1>
    </div>
    <div className="about-container">
   
        <div className=" about-card">
        <div >
            <img src="https://cdn.pixabay.com/photo/2021/05/23/00/21/woman-6274879_1280.png" alt="profile" />
        </div>
            <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur unde facilis incidunt aliquam esse assumenda! Eius temporibus dolorem voluptatibus adipisci quidem. Aspernatur nemo magni optio temporibus saepe laudantium sit voluptas.
            </p>
      
        </div>  

        <div className=" about-card">
            <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid laudantium dolorum nam incidunt nisi voluptatum, porro tempore aut! Magnam perspiciatis et tempora pariatur totam illum molestias aperiam asperiores ducimus vero!
            </p>
            <div >
            <img src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302__340.jpg" alt="profile" />
        </div> 
    </div>    
</div>
</div>
<div className="slogan-container text-center p-5">
        <h1 className="mb-5">We love plants. Let us take
        your plants flourish!</h1>
        <button className="btn btn-success btn-lg btn-color">Get in touch</button>
    </div>
    

<Footer />
  

    </>
  ) 
};

export default AboutUs;
