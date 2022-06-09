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
            <div>
              <img
                className="about-img"
                src="https://cdn.pixabay.com/photo/2021/05/23/00/21/woman-6274879_1280.png"
                alt="profile"
              />
            </div>
            <div className="about-text">
              <p>
                Mariia has always enjoyed having plants indoors. They instantly
                brighten up the room and create a feeling of home. Taking care
                of plants is in itself a very rewarding activity and provides a
                sense of emotional well-being. Although plant care can quickly
                become quite the opposite, when finding the right information
                takes way too much time and possible risks to beloved pets are
                stressing you out. And so the idea of having a beginner-friendly
                resource came up. Easy plant care guide with handy filters has
                all necessary information to allow your green friends thrive and
                your fluffy ones stay safe.
              </p>
            </div>
          </div>

          <div className=" about-card">
            <div className="about-text">
              <p>
                Rachel is web development student based in Helsinki who loves
                nature and greens. She likes to have plants and flowers at home,
                her favorite plant is Aloe Vera. Many of the plants I had at
                home didn't survive long. So I hope with the information we
                gather on this website, it can help a plant killer to become a
                long term plant keeper. Long live the plants!
              </p>
            </div>
            <div>
              <img
                className="about-img"
                src="https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302__340.jpg"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="slogan-container text-center p-5">
        <h1 className="mb-5"> Let's make your plants flourish!</h1>
        <button className="btn-aboutus">
          {" "}
          <Link to="/contact" className="nav-link link-color">
            Get in touch
          </Link>
        </button>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
