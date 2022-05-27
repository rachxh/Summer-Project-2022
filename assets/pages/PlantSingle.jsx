import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PlantSingle = () => {
  const [item, setItem] = useState({});
  let params = useParams();


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then((res) => {
      setItem(res.data);
      // console.log(item);
    });
    console.log(params);
  }, [params]);

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description} </p>

      <img src={item.image} alt="" />

    </div>
  );
};

export default PlantSingle;

