import React, { useEffect, useState } from "react";
import axios from "axios";
import PlantCard from "./PlantCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';


const sortIcon = <FontAwesomeIcon icon={faArrowDownAZ} />;

const PlantList = () => {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [orderedAZ, setOrderedAZ] = useState(0);
  const [isPetFriendly,setIsPetFriendly] = useState(true);
	const [filterPlants, setFilterPlants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8007/api/plants")
      .then((res) => {
        setPlants(res.data);
        setFilterPlants(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleSort = () => {
		const sortedPlants = [...plants];
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
    let newPlants = [...plants];

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
		const newPlants = [...plants];
		if (isPetFriendly) {
			setFilterPlants(newPlants.filter(plant => plant.pets));
			setIsPetFriendly(false);
		} else {
			setFilterPlants(newPlants);
			setIsPetFriendly(true);
		}
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
            .filter((plant) =>
              plant.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((plant) => (
              <PlantCard
                key={plant.id}
                id={plant.id}
                name={plant.name}
                img={plant.img}
              />
            ))}
        </div>
      }
    </div>
  );
};

export default PlantList;
