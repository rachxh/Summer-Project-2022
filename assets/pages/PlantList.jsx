import React, { useEffect, useState } from "react";
import axios from "axios";
import PlantCard from "./PlantCard";

const PlantList = () => {
const [plants, setPlants] = useState([]);
const [search, setSearch] = useState("");


console.log("HiHO!")
useEffect(() => {
    axios
      .get("http://localhost:8007/api/plants")
      .then((res) => {
        setPlants(res.data)
      }).catch((error) => {
        console.error(error)
      })
  }, []);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div>
      <form className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          placeholder="Search for Plants"
          onChange={updateSearch}
        />
      </form>
  
      {<div className="plant-list">
        {plants
          .filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))
          .map((plant) => (
            <PlantCard
            key={plant.id}
            name={plant.name}
            img={plant.img}
            />
          ))}
      </div>}
    </div>
  );
};

export default PlantList;
