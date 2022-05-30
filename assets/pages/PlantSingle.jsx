import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PlantSingle = () => {
  const [item, setItem] = useState({});
  let params = useParams();


  useEffect(() => {
    axios.get(`http://localhost:8007/api/plants/${params.id}`).then((res) => {
      setItem(res.data);
      // console.log(item);
    }).catch((error) => {
      console.error(error);
    })
    console.log('request plant', params);
  }, [params]);

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.condition} </p>

      <img src={item.image} alt="" />

    </div>
  );
};

export default PlantSingle;

