import React from "react";
import PlantList from "./PlantList";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
  <div>
 <Header />
<section className="bg-dark text-light p-5 text-center text-sm-start">
<div className="container">
  <div className="d-sm-flex align-items-center justify-content-between">
  <div>
    <h1>Take care of plants </h1>
    <p className="lead my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat inventore sit ipsum illo velit ex, quos quisquam nam veniam?</p>

   <button className="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#login">Login</button>

    </div>
  <img className="img-fluid w-50 d-none d-sm-block"  src="https://cdn.pixabay.com/photo/2019/04/10/12/32/house-plants-4116992__480.png" alt="" />
  </div>
</div>
</section>
 <PlantList />
 <Footer />
  </div>
  );
};

export default Home;
