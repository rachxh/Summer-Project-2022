import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Contact from "./Contact";
import { Link } from "react-router-dom";

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
        <div  >
            <img className="about-img" src="https://cdn.pixabay.com/photo/2021/05/23/00/21/woman-6274879_1280.png" alt="profile" />
        </div>
        <div className="about-text">
            <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias error veritatis commodi qui quis soluta eaque minus, blanditiis aperiam, quisquam quo quas totam hic nam minima beatae, debitis consequatur ipsa deserunt quos earum est deleniti harum? Provident eum quas quasi veniam quae esse aliquam ea doloremque aperiam enim fugiat id ducimus cumque distinctio hic fuga cum laudantium magni, tempora quos itaque! In amet alias voluptatibus officiis eos saepe deserunt fugiat! Deserunt debitis rem officiis porro id dicta ratione quia sed?
            </p>
            </div>
      
        </div>  

        <div className=" about-card">
            <div className="about-text">
            <p>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non atque enim ad sit quos nostrum possimus excepturi, beatae magnam autem natus dicta eligendi neque quibusdam? Modi ea voluptate quisquam itaque nulla aperiam fugit nesciunt, fugiat molestias similique minima expedita ratione aspernatur reprehenderit accusamus eius corporis porro. Voluptas molestiae debitis velit sapiente odio ad blanditiis voluptatibus possimus expedita enim earum, voluptate ex. Illo, facere quod? Ullam molestias amet consequuntur corporis doloribus corrupti mollitia voluptatum! Porro voluptate, suscipit nostrum quisquam at amet.
            </p>
            </div>
            <div >
            <img  className="about-img" src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302__340.jpg" alt="profile" />
        </div> 
    </div>    
</div>
</div>
<div className="slogan-container text-center p-5">
        <h1 className="mb-5"> Let's  keep
        your plants flourish!</h1>
        <button className="btn-aboutus"> <Link to="/contact" className="nav-link link-color" >Get in touch</Link></button>
    </div>
    

<Footer />
  

    </>
  ) 
};

export default AboutUs;
