import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import MyPlants from "./pages/MyPlants";
import PlantSingle from "./pages/PlantSingle";
import Layout from "./components/Layout";
import FavSingle from "./pages/FavSingle";

function Main() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/catalogue" element={<Home />} />
          <Route path="plant/:id" element={<PlantSingle />} />
          <Route path="myFav/:id" element={<FavSingle />} />
          <Route exact path="/myPlants" element={<MyPlants />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default Main;

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
