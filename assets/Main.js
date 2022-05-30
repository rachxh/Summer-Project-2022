import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
// import PlantList from "./pages/PlantList";
import PlantSingle from "./pages/PlantSingle";
import Layout from "./components/Layout";
import Login from "./pages/Login";

function Main() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/catalogue" element={<Home />} />
          <Route path="plant" element={<PlantSingle />} />
          <Route path="myPlants" element={<MyPlants />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
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
