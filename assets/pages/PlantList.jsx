import React, { useEffect, useState } from "react";
import axios from "axios";
import PlantCard from "./PlantCard";

const PlantList = () => {
const [plants,setPlants]=useState([])
const [search, setSearch] = useState("");

useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=60&offset=0")
      .then((res) => setRecipes(res.data));
  }, []);
  console.log('plants will be here', plants);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="Plant-list">
      <form className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          placeholder="Search for recipe"
          onChange={updateSearch}
        />
      </form>
      <div className="plant-list">
        {recipes
          .filter((recipe) => recipe.name.includes(search))
          .map((recipe) => (
            <PlantCard
            name={p.name}
            key={p.name}
            img={
              p.sprites.versions["generation-v"]["black-white"].animated
                .front_default
            }
             
            />
          ))}
      </div>
    </div>
  );
};

export default PlantList;
