import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";

const FavSingle = () => {

  const [favPlant, setFavPlant] = useState({});
  const [id, setId] = useState(useParams().id);

  useEffect(() => {
    axios
      .get(`http://localhost:8007/api/favourite/${id}`)
      .then((res) => {
        setFavPlant(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      icon: "danger",
      title: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, please delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8007/api/favourite/${id}`)
          .then(function (response) {
            Swal.fire({
              icon: "success",
              title: "Plant deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            setFavPlant();
          })
          .catch(function (error) {
            Swal.fire({
              icon: "error",
              title: "An error occurred!",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };


  return (
    <>
      <Header />
      <div className="sp-container">
        <h1>{favPlant.name}</h1>

        <div className="sp-card">
          <img src={favPlant.img} alt={favPlant.name}/>
          <div className="sp-text">
            <p className="sp-subtitle"> ☀️ Conditions: </p>
            <p className="plant-detail"> {favPlant.conditions}</p>
            <p className="sp-subtitle"> 💦 Water: </p>
            <p className="plant-detail">{favPlant.water}</p>
            <p className="sp-subtitle"> 🌱 Difficulty: </p>
            <p className="plant-detail">{favPlant.difficulty} </p>
            {/* <button className="order-btn"  onClick={() => handleDelete(favPlant.id)} >
             remove
            </button> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FavSingle;
