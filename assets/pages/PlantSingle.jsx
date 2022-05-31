import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PlantSingle = () => {
  const [item, setItem] = useState({});
  const [id, setId] = useState(useParams().id);

  useEffect(() => {
    axios
      .get(`http://localhost:8007/api/plants/${id}`)
      .then((res) => {
        setItem(res.data);
        setId(res.data);
        console.log(item);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("request plant", id);
  }, [id]);

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.conditions} </p>

      <img src={item.img} alt="" />
    </div>
  );
};

export default PlantSingle;
