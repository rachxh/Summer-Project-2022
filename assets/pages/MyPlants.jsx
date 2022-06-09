import React, { useState, useEffect } from "react";
import axios from "axios";
import LikeCard from "./LikeCard";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";

const sortIcon = <FontAwesomeIcon icon={faArrowDownAZ} />;

const MyPlants = () => {
  const [myPlants, setMyPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [orderedAZ, setOrderedAZ] = useState(0);
  const [isPetFriendly,setIsPetFriendly] = useState(true);
	const [filterPlants, setFilterPlants] = useState([]);

  useEffect(() => getMyPlants(), []);

  const getMyPlants = () => { 
  axios
    .get("http://localhost:8007/api/favourite")
    .then((res) => {
      setMyPlants(res.data);
      setFilterPlants(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
  };
 

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };


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
            getMyPlants()
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

const handleSort = () => {
const sortedPlants = [...myPlants];
if (orderedAZ === 0 || orderedAZ === 2) {
  setFilterPlants(
    sortedPlants.sort((a, b) => (a.name > b.name ? 1 : -1))
  );
  setOrderedAZ(1);
} else {
  setFilterPlants(
    sortedPlants.sort((a, b) => (a.name > b.name ? -1 : 1))
  );
  setOrderedAZ(2);
}
};

const handleCare = e => {
let newPlants = [...myPlants];

switch (orderedAZ) {
  case 1:
    break;
  case 2:
    setFilterPlants(
      newPlants.sort((a, b) => (a.name > b.name ? 1 : -1))
    );
    break;
  case 3:
    setFilterPlants(
      newPlants.sort((a, b) => (a.name > b.name ? -1 : 1))
    );
    break;
}

if (e.target.value !== 'Difficulty:') {
  let careValue = parseInt(e.target.value);
  newPlants = newPlants.filter(plant => plant.difficulty === careValue);
}

setFilterPlants(newPlants);
};

const handlePetFriendly = () => {
const newPlants = [...myPlants];
if (isPetFriendly) {
  setFilterPlants(newPlants.filter(myPlant => myPlant.pets));
  setIsPetFriendly(false);
} else {
  setFilterPlants(newPlants);
  setIsPetFriendly(true);
}
};

  return (
    <>
    <Header />
   
    <div className="sp-container">
      <h1>My favorite plants 💕</h1>
      
      <form className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          placeholder="Search for Plants"
          onChange={updateSearch}
        />
      </form>
      <div className='filters'>
			{/* Care Level selector */}
			<select name='care-level' onChange={e => handleCare(e)} className='care-level'>
				<option>Difficulty:</option>
				<option value='1'>Easy</option>
				<option value='2'>Medium</option>
				<option value='3'>Difficult</option>
			</select>

			{/* Pet Friendly Plants Only */}
			<button className='pet-btn' onClick={handlePetFriendly}>
				 🐾 
			</button>

			{/* Alphabetical Order */}
			<button className='order-btn' onClick={handleSort}>
				{sortIcon}
			</button>
		</div>


{
        <div className="plant-list">
          {filterPlants
            .filter((myPlant) =>
              myPlant.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((myPlant) => (
              <LikeCard
              key={myPlant.id}
              id={myPlant.id}
              name={myPlant.name}
              img={myPlant.img}
              onClick={id => handleDelete(id)}
              />
            ))}
        </div>
      }
    </div>

   <Footer />
    </>
  );
};

export default MyPlants;
